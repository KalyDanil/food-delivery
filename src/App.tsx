import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/constants/routes";
import Main from "./ui/pages/Main";
import Menu from "./ui/pages/Menu";
import Order from "./ui/pages/Order";
import { initializeApp } from "firebase/app";
import { ToastContainer } from "react-toastify";
import NotFound from "./ui/pages/NotFound";
import { firebaseConfig } from './utils/constants/user';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userActions } from './store/reducers/user/slicer';

initializeApp(firebaseConfig);

function App() {
  const dispatch = useDispatch();

  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>
      dispatch(userActions.setUserAccount({
        uid: user? user.uid : null,
        email: user? user.email : null,
        displayName: user? user.displayName : null
      }))
    );
  }, [auth, dispatch])

  return (
    <BrowserRouter>
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.MAIN} />} />
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.MENU} element={<Menu />} />
        <Route path={ROUTES.ORDER} element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
