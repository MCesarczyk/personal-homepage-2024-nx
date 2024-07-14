import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../app/routes';

export const Navigation = () => {
  const { pathname } = useLocation();

  const isPathActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-slate-800 text-white mb-[-64px]" role="navigation">
      <ul className="flex gap-4 p-4">
        <li>
          <Link
            className={clsx(isPathActive(ROUTES.HOME) && 'text-red-500')}
            to={ROUTES.HOME}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={clsx(isPathActive(ROUTES.LOGIN) && 'text-red-500')}
            to={ROUTES.LOGIN}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
