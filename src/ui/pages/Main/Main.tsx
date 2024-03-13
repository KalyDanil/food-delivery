import { getAuth } from "firebase/auth";
import MainStyle from "./MainStyle";
import Registration from "./Registration";
import Authorization from "./Authorization";
import { useState } from "react";
import { useAuthStateChanged } from "../../../utils/functions/hooks";
import SignOutButton from "../../components/SignOutButton";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/constants/routes";

const Main = () => {
  const [isRegistration, setIsRegistration] = useState(true);

  const user = useAuthStateChanged(getAuth());

  const navigate = useNavigate();

  if (Object.is(user, null)) {
    return null;
  }

  return (
    <MainStyle>
      <h1>Food delivery</h1>
      {user ? (
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
