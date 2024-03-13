import { useNavigate } from "react-router-dom";
import SignOutButton from "../../components/SignOutButton";
import { ROUTES } from "../../../utils/constants/routes";
import MenuStyle from "./MenuStyle";
import { getAuth } from "firebase/auth";
import { useAuthStateChanged } from "../../../utils/functions/hooks";

const Menu = () => {
  const navigate = useNavigate();
  const user = useAuthStateChanged(getAuth());

  return (
    <MenuStyle>
      <h1>Menu</h1>
      <SignOutButton />
      <div>{user ? user.displayName : ""}</div>
      <button onClick={() => navigate(ROUTES.MAIN)}>Go to main</button>
    </MenuStyle>
  );
};

export default Menu;
