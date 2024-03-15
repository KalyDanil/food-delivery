import { useQuery } from '@tanstack/react-query';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/reducers/user/slicer';
import { ROUTES } from '../../../utils/constants/routes';
import { Navigate, Outlet } from 'react-router-dom';
import { LS_USER_ID } from '../../../utils/constants/storage';

const AuthGuard = () => {
  const dispatch = useDispatch();
  useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        dispatch(
          userActions.setUserAccount({
            id: user ? user.uid : null,
            email: user ? user.email : null,
            displayName: user ? user.displayName : null,
          }),
        );

        if (user) {
          localStorage.setItem(LS_USER_ID, user.uid);
          return;
        }

        localStorage.removeItem(LS_USER_ID);
      });

      return null;
    },
  });

  return <Outlet />;
};

export default AuthGuard;