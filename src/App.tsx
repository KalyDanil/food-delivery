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

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDwb4GOsZVUJQ-lSGRPbdsXra-XqGqorqk",
    authDomain: "food-delivery-apptrix.firebaseapp.com",
    projectId: "food-delivery-apptrix",
    storageBucket: "food-delivery-apptrix.appspot.com",
    messagingSenderId: "714461672684",
    appId: "1:714461672684:web:5c9fc57c743266b98c21c9",
  };

  initializeApp(firebaseConfig);

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
