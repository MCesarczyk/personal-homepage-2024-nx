import { IPublicUserData } from "@ph24/shared/domain";
import { ApiMethod, isApiError, useApi } from "@ph24/react/service-api";
import AuthClientStore from "./AuthClientStore";
import { routes } from "./routes";

/*
 * These variables are used to debounce the refreshTokens function
 */
let debouncedPromise: Promise<unknown> | null;
let debouncedResolve: (...args: unknown[]) => void;
let debouncedReject: (...args: unknown[]) => void;
let timeout: NodeJS.Timeout;

export const useAuthApi = () => {
  const { sendRequest, sendProtectedRequest } = useApi();

  const login = async (email: string, password: string) => {
    const response = await sendRequest(ApiMethod.POST, routes.auth.login, {
      email,
      password,
    });

    AuthClientStore.setAccessToken(response.access_token);
    AuthClientStore.setRefreshToken(response.refresh_token);

    return response;
  };

  const logout = () => {
    AuthClientStore.removeAccessToken();
    AuthClientStore.removeRefreshToken();
  };
  const refreshTokens = async () => {
    clearTimeout(timeout);
    if (!debouncedPromise) {
      debouncedPromise = new Promise((resolve, reject) => {
        debouncedResolve = resolve;
        debouncedReject = reject;
      });
    }

    timeout = setTimeout(() => {
      const executeLogic = async () => {
        const response = await sendProtectedRequest(
          ApiMethod.POST,
          routes.auth.refreshTokens,
          { refresh_token: AuthClientStore.getRefreshToken() },
          AuthClientStore.getAccessToken(),
        );

        AuthClientStore.setAccessToken(response.access_token);
        AuthClientStore.setRefreshToken(response.refresh_token);
      };

      executeLogic().then(debouncedResolve).catch(debouncedReject);

      debouncedPromise = null;
    }, 200);

    return debouncedPromise;
  };

  const sendAuthGuardedRequest = async <T>(
    userIsNotAuthenticatedCallback: () => void,
    method: ApiMethod,
    path: string,
    body?: T,
    init?: RequestInit,
  ) => {
    try {
      return await sendProtectedRequest(method, path, body, AuthClientStore.getAccessToken(), init);
    } catch (e) {
      if (isApiError(e) && e?.status === 401) {
        try {
          await refreshTokens();
        } catch (e) {
          userIsNotAuthenticatedCallback();
          throw e;
        }
        return await sendProtectedRequest(method, path, body, AuthClientStore.getAccessToken(), init);
      }

      throw e;
    }
  };

  const me = (userIsNotAuthenticatedCallback: () => void) => {
    return sendAuthGuardedRequest(
      userIsNotAuthenticatedCallback,
      ApiMethod.POST,
      routes.auth.me,
    ) as Promise<IPublicUserData>;
  };

  return { login, logout, me, sendAuthGuardedRequest };
};
