import { useQuery } from '@tanstack/react-query';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/reducers/user/slicer';
import { Outlet } from 'react-router-dom';
import { LS_USER_ID } from '../../../utils/constants/storage';
import { setUserId } from '../../../utils/functions/user';

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
          setUserId(user.uid);
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
