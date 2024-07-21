import { API_PREFIX, API_URL } from "../../app/apiUrl";
import { AUTH_URLS } from "./authUrls";

export const authService = {
  login: async (username: string, password: string) => {
    const response = await fetch(`${API_URL}${API_PREFIX}${AUTH_URLS.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: username, password: password }),
    });
    const data = await response.json();
    return data;
  },
  logout: async () => {
    const response = await fetch(`${API_URL}${API_PREFIX}${AUTH_URLS.LOGOUT}`, {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  },
  getUser: async () => {
    const response = await fetch(`${API_URL}${API_PREFIX}${AUTH_URLS.GET_USER}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  },
};
