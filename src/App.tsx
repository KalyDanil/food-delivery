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

initializeApp(firebaseConfig);

function App() {
  const { account } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userReq.getUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      {account.id && <UserHeader />}
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.MAIN} />} />
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.MENU} element={<RouterForAuthorized />}>
          <Route path={ROUTES.MENU} element={<Menu />} />
        </Route>
        <Route path={ROUTES.ORDER} element={<RouterForAuthorized />}>
          <Route path={ROUTES.ORDER} element={<Order />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
