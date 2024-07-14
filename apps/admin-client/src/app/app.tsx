import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../app/routes';
import { Home } from '../pages/home';
import { LoginPage } from '../pages/login';
import { Navigation } from '../components/navigation';

export function App() {
  return (
    <div className="bg-gray-500 h-screen">
      <Navigation />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
