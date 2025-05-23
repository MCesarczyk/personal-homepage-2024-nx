import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@ph24/ui';
import { authService } from './authService';
import { ROUTES } from '../../app/routes';
import { localStorageService } from '../../services/localStorageService';
import {
  LOCAL_STORAGE_ACCESS_TOKEN,
  LOCAL_STORAGE_REFRESH_TOKEN,
} from '../../features/auth/constants';

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const response = await authService.login(
      username as string,
      password as string
    );
    localStorageService.setItem(
      LOCAL_STORAGE_ACCESS_TOKEN,
      response.accessToken
    );
    localStorageService.setItem(
      LOCAL_STORAGE_REFRESH_TOKEN,
      response.refreshToken
    );
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <form
      className="flex flex-col text-white bg-slate-800 p-8 gap-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="username">Username</label>
      <Input type="text" id="username" name="username" />
      <label htmlFor="password">Password</label>
      <Input type="password" id="password" name="password" />
      <Button variant="PRIMARY" type="submit">
        Submit
      </Button>
    </form>
  );
};
