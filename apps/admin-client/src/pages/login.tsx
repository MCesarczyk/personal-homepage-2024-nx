import { LoginForm } from '../components/loginForm';

interface LoginPageProps {
  setToken: (token: string) => void;
}

export const LoginPage = ({ setToken }: LoginPageProps) => {
  return (
    <div className="grid place-content-center h-full">
      <LoginForm {...{ setToken }} />
    </div>
  );
};
