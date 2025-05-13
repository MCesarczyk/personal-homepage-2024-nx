import { localStorageService } from "../../../services/localStorageService";
import { API_PREFIX, API_URL } from "../../../app/apiUrl";
import { SKILLS_URLS } from "../../skills/api/skillsUrls";
import { LOCAL_STORAGE_ACCESS_TOKEN } from "../../../features/auth/constants";

const token = localStorageService.getItem(LOCAL_STORAGE_ACCESS_TOKEN);

export const skillsService = {
  getSkills: async () => {
    const response = await fetch(`${API_URL}${API_PREFIX}${SKILLS_URLS.getSkills}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch skills');
    }
    return response.json();
  }
}
