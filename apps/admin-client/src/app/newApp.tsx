import { useEffect, useState } from 'react';
import rabitByteClubLogo from '../assets/rabbit-byte-club-logo.png';
import './newApp.css';
import { useAuthContext } from '@ph24/react/feature-auth';
import { useUserApi } from '@ph24/react/feature-user';

function App() {
  const { isAuthenticated, login, logout, me } = useAuthContext();
  const [appIsLoading, setAppIsLoading] = useState(true);

  const { findAllUsers } = useUserApi();

  useEffect(() => {
    me()
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {})
      .finally(() => setAppIsLoading(false));
  }, [me]);

  if (appIsLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSubmit={(e: any) => {
          e.preventDefault();
          login(e.target[0].value, e.target[1].value);
        }}
      >
        <div>Authentication</div>
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </form>
    );
  }

  return (
    <>
      <div>
        <a
          href="https://rabbitbyte.club"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={rabitByteClubLogo}
            className="logo"
            alt="logo-rabbit-byte"
          />
        </a>
      </div>
      <h1>Rabbit Byte Club</h1>
      <div style={{ display: 'flex', gap: 16 }}>
        <button
          onClick={() => {
            for (let i = 0; i < 5; i++) {
              findAllUsers(10, 0);
            }
          }}
        >
          Simulate 5 concurrent requests
        </button>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </>
  );
}

export default App;
