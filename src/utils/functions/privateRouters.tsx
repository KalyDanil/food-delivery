import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { LS_USER_ID } from '../constants/storage';

export const RouterForAuthorized = () => {
  return localStorage.getItem(LS_USER_ID) ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.MAIN} />
  );
};
