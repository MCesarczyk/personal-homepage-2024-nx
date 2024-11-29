import { ApiMethod } from "./types";

const apiUrl = import.meta.env.VITE_API_BASE_URL as string;

const sendRequest = async <T>(
  method: ApiMethod,
  path: string,
  body?: T,
  authToken?: string | null,
  init?: RequestInit,
) => {
  const response = await fetch(apiUrl + path, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
      ...init?.headers,
    },
  });
  if (response.status >= 400) {
    throw response;
  }
  return await response.json();
};

const sendProtectedRequest = <T>(
  method: ApiMethod,
  path: string,
  body?: T,
  authToken?: string | null,
  init?: RequestInit,
) => {
  if (!authToken) {
    throw new Error("No auth token found");
  }

  return sendRequest(method, path, body, authToken, init);
};

export const useApi = () => {
  return { sendRequest, sendProtectedRequest };
};
