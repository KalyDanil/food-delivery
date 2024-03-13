import { useNavigate } from "react-router-dom";
import SignOutButton from "../../components/SignOutButton";
import { ROUTES } from "../../../utils/constants/routes";
import MenuStyle from "./MenuStyle";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { useDispatch } from 'react-redux';
import { foodsActions } from '../../../store/reducers/foods/slicer';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../store';

const Menu = () => {
  const {account} = useSelector((state: RootStateType) => state.user)
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const dbRef = ref(getDatabase());

  get(child(dbRef, `foods`)).then((snapshot) => {
    if (snapshot.exists()) {
      dispatch(foodsActions.setFoods(snapshot.val()))
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  return (
    <MenuStyle>
      <h1>Menu</h1>
      <SignOutButton />
      <div>{account.displayName}</div>
      <button onClick={() => navigate(ROUTES.MAIN)}>Go to main</button>
    </MenuStyle>
  );
};

export default Menu;
