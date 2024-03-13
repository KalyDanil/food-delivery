import { getAuth } from "firebase/auth";
import MainStyle from "./MainStyle";
import Registration from "./Registration";
import Authorization from "./Authorization";
import { useState } from "react";
import SignOutButton from "../../components/SignOutButton";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/constants/routes";
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../store';

const Main = () => {
  const {account} = useSelector((state: RootStateType) => state.user);

  const [isRegistration, setIsRegistration] = useState(true);

  const navigate = useNavigate();

  if (Object.is(account, null)) {
    return null;
  }

  return (
    <MainStyle>
      <h1>Food delivery</h1>
      {account.uid ? (
        <div>
          <SignOutButton />
          <button onClick={() => navigate(ROUTES.MENU)}>Go to menu</button>
        </div>
      ) : (
        <>
          {" "}
          <div className="main__tabsBox">
            <button
              className={`main__tab ${
                isRegistration ? "main__tab-active" : ""
              }`}
              onClick={() => setIsRegistration(true)}
            >
              Registration
            </button>{" "}
            <button
              className={`main__tab ${
                !isRegistration ? "main__tab-active" : ""
              }`}
              onClick={() => setIsRegistration(false)}
            >
              Authorization
            </button>
          </div>
          {isRegistration ? <Registration /> : <Authorization />}
        </>
      )}
    </MainStyle>
  );
};

export default Main;
