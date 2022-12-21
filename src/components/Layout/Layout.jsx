import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { GlobalStyle } from 'utils/GlobalStyles';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
      <GlobalStyle />
    </>
  );
};
