import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Header, Footer } from './Layout.styled';
import { Section } from 'components/Section/Section';
import { BiCopyright } from 'react-icons/bi';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main>
        <Section>
          <Outlet />
        </Section>
      </main>

      <Footer>
        <BiCopyright />
        2022 ValeryLi
      </Footer>
    </>
  );
};
