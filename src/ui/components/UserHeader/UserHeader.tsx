import UserHeaderStyle from './UserHeaderStyle';
import { useDispatch, useSelector } from '../../../utils/functions/hooks';
import userReq from '../../../store/reducers/user/thunks';
import { IOrderFood } from '../../../types/foods';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/routes';

const UserHeader = () => {
  const { account, currentOrder } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const totalPrice = currentOrder.foods.reduce(
    (accumulator: number, food: IOrderFood) => {
      return accumulator + food.price * food.amount;
    },
    0,
  );

  const amount = currentOrder.foods.length;

  return (
    <UserHeaderStyle>
      <span>{account.displayName}</span>
      <div className="userHeader__shoppingCartBox">
        <img
          className="userHeader__shoppingCartIcon"
          src="/assets/icons/shoppingCart.svg"
          onClick={() => navigate(ROUTES.ORDER)}
          alt="shopping cart"
        />
        <div className="userHeader__counter">{amount}qt.</div>
        <div className="userHeader__totalPrice">{totalPrice}$</div>
      </div>
      <button
        className="userHeader__logOut"
        onClick={() => dispatch(userReq.logOut())}
      >
        Log out
      </button>
    </UserHeaderStyle>
  );
};

export default UserHeader;
