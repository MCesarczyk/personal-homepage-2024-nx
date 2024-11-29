export const routes = {
  auth: {
    me: "/auth/identify",
    login: "/auth/login",
    refreshTokens: "/auth/refresh",
  },
  user: {
    findAll: "/user",
    findOne: (id: number) => `/user/${id}`,
  },
};
