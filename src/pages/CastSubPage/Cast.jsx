import { ActorsList } from 'components/ActorsList/ActorsList';
import { Outlet } from 'react-router-dom';
export const Cast = ({ actors }) => {
  return (
    <>
      <ActorsList actors={actors} />
      <Outlet />
    </>
  );
};
