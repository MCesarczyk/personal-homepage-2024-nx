import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../app/routes';
import { LoginPage } from '../pages/login';
import { DashboardPage } from '../pages/dashboard';
import { SkillsPage } from '../pages/skills';
import { Navigation } from '../components/navigation';
import { ProtectedRoute } from './protectedRoute';
import './styles.css';

export function App() {
  const [token, setToken] = useState<string | null>(null);

  return (
    <div className="bg-gray-500 h-screen">
      <Navigation />
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage {...{ setToken }} />} />
        <Route element={<ProtectedRoute token={token} />}>
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.SKILLS} element={<SkillsPage />} />
        </Route>
        <Route path={'*'} element={<Navigate to={ROUTES.DASHBOARD} />} />
      </Routes>
    </div>
  );
}

export default App;
