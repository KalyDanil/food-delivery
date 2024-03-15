import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/constants/routes';
import Main from './ui/pages/Main';
import Menu from './ui/pages/Menu';
import Order from './ui/pages/Order';
import { initializeApp } from 'firebase/app';
import { ToastContainer } from 'react-toastify';
import NotFound from './ui/pages/NotFound';
import { firebaseConfig } from './utils/constants/user';
import { useEffect } from 'react';
import { RouterForAuthorized } from './utils/functions/privateRouters';
import { useDispatch, useSelector } from './utils/functions/hooks';
import userReq from './store/reducers/user/thunks';
import UserHeader from './ui/components/UserHeader';
import Loader from './ui/components/Loader';
import { LS_USER_ID } from './utils/constants/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { userActions } from './store/reducers/user/slicer';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import AuthGuard from './ui/components/AuthGuard';

initializeApp(firebaseConfig);

const queryClient = new QueryClient();

function App() {
  const { isLoading } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      {isLoading && <Loader />}
      <ToastContainer autoClose={3000} />
      <QueryClientProvider client={queryClient}>
        {localStorage.getItem(LS_USER_ID) && <UserHeader />}
        <Routes>
          <Route path="/" element={<AuthGuard />}>
            <Route path="/" element={<Navigate to={ROUTES.MAIN} />} />
            <Route path={ROUTES.MAIN} element={<Main />} />
            <Route path={ROUTES.MENU} element={<RouterForAuthorized />}>
              <Route path={ROUTES.MENU} element={<Menu />} />
            </Route>
            <Route path={ROUTES.ORDER} element={<RouterForAuthorized />}>
              <Route path={ROUTES.ORDER} element={<Order />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
