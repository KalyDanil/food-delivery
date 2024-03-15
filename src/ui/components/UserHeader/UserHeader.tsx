import UserHeaderStyle from './UserHeaderStyle';
import { useDispatch, useSelector } from '../../../utils/functions/hooks';
import userReq from '../../../store/reducers/user/thunks';
import { IOrderFood } from '../../../types/foods';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/routes';
import { useEffect } from 'react';
import Purchases from './Purchases';
import { useTranslation } from 'react-i18next';

const UserHeader = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { account, chosenFoods } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (account.id) {
      dispatch(userReq.getOrders(account.id));
    }
  }, [dispatch, account.id]);

  const totalPrice = chosenFoods.reduce(
    (accumulator: number, food: IOrderFood) => {
      return accumulator + food.price * food.amount;
    },
    0,
  );

  return (
    <UserHeaderStyle>
      <span>{account.displayName}</span>
      <Purchases />
      <div className="userHeader__shoppingCartBox">
        <img
          className="userHeader__shoppingCartIcon"
          src="/assets/icons/shoppingCart.svg"
          onClick={() => navigate(ROUTES.ORDER)}
          alt="shopping cart"
        />
        <div className="userHeader__totalPrice">{totalPrice}$</div>
      </div>
      <button
        className="userHeader__logOut"
        onClick={() => dispatch(userReq.logOut())}
      >
        {t('Log out')}
      </button>
    </UserHeaderStyle>
  );
};

export default UserHeader;
