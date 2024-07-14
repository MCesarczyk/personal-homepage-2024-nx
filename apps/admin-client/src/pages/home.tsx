import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="m-20">
      This is the generated root route.
      <Link to="/login">
        Click <span className="text-blue-700">here</span> for login.
      </Link>
    </div>
  );
};
