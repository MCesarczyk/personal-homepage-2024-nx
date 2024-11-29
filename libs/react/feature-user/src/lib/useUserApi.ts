import { routes, useAuthContext } from "@ph24/react/feature-auth";
import { ApiMethod, buildQueryParams } from "@ph24/react/service-api";
import { IPublicUserData } from "@ph24/shared/domain";

export const useUserApi = () => {
  const { sendAuthGuardedRequest } = useAuthContext();

  const findAllUsers = async (
    limit: number,
    offset: number,
  ): Promise<IPublicUserData[]> => {
    const queryString = buildQueryParams([
      { key: "limit", value: limit.toString() },
      { key: "offset", value: offset.toString() },
    ]);

    return sendAuthGuardedRequest(
      ApiMethod.GET,
      routes.user.findAll + queryString,
    ) as Promise<IPublicUserData[]>;
  };

  const findOneUser = async (id: number): Promise<IPublicUserData> => {
    return sendAuthGuardedRequest(ApiMethod.GET, routes.user.findOne(id)) as Promise<IPublicUserData>;
  };

  return { findAllUsers, findOneUser };
};
