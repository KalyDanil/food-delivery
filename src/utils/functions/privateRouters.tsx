import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { getUserId } from './user';

export const RouterForAuthorized = () => {
  return getUserId() ? <Outlet /> : <Navigate to={ROUTES.MAIN} />;
};
