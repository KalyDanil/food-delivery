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
import { RouterForAuthorized } from './utils/functions/privateRouters';
import { useSelector } from './utils/functions/hooks';
import UserHeader from './ui/components/UserHeader';
import Loader from './ui/components/Loader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthGuard from './ui/components/AuthGuard';
import { getUserId } from './utils/functions/user';

initializeApp(firebaseConfig);

const queryClient = new QueryClient();

function App() {
  const { isLoading } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      {isLoading && <Loader />}
      <ToastContainer autoClose={3000} />
      <QueryClientProvider client={queryClient}>
        {getUserId() && <UserHeader />}
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
