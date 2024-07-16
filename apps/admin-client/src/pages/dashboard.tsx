import { Link } from 'react-router-dom';
import { ROUTES } from '../app/routes';

export const DashboardPage = () => {
  return (
    <div className="m-20">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <Link to={ROUTES.SKILLS} className="text-blue-700">
        Skills
      </Link>
    </div>
  );
};
