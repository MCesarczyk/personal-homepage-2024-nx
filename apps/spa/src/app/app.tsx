import styled, { ThemeProvider } from 'styled-components';

import { Link } from '@ui';
import { darkMode } from '@ui';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  background: lightgray;
`;

export function App() {
  return (
    <StyledApp>
      <ThemeProvider theme={darkMode}>
        <Link href="https://nx.dev">Learn Nx</Link>
        <NxWelcome title="spa" />
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
