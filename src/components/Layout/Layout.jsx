import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
