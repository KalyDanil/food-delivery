import { useTranslation } from 'react-i18next';
import { IOrder } from '../../../../types/user';
import FoodCard from '../../../components/FoodCard';
import ConfirmedOrderStyle from './ConfirmedOrderStyle';
import { ROUTES } from '../../../../utils/constants/routes';
import NavigationButton from '../../../components/NavigationButton';
import { useEffect } from 'react';
import { useDispatch } from '../../../../utils/functions/hooks';
import { userActions } from '../../../../store/reducers/user/slicer';

const ConfirmedOrder: React.FC<{ confirmedOrder: IOrder }> = ({
  confirmedOrder,
}) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { id, foods, address, paymentType, totalPrice } = confirmedOrder;

  useEffect(() => {
    return () => {
      dispatch(userActions.changeChosenFoods(null));
    };
  });

  const foodsList = foods.map((item) => (
    <FoodCard food={item} canOrder={false} key={item.id} />
  ));

  return (
    <ConfirmedOrderStyle>
      <NavigationButton text={t('To menu')} route={ROUTES.MENU} />
      <h1>{t('Order was confirmed')}</h1>
      <div>
        <span className="confirmedOrder__label">{t('Order number')}:</span> {id}
      </div>
      <div className="confirmedOrder__foodBox">
        <span className="confirmedOrder__label">{t('Foods')}</span>
        <div className="confirmedOrder__foodList">{foodsList}</div>
      </div>
      <div>
        <span className="confirmedOrder__label">{t('Address')}:</span>{' '}
        {address.street}, {address.home}, {address.entrance},{' '}
        {address.apartment}
      </div>
      <div>
        <span className="confirmedOrder__label">{t('Payment type')}: </span>
        {paymentType}
      </div>
      <div>
        <span className="confirmedOrder__label">{t('Total price')}: </span>
        {totalPrice}$
      </div>
    </ConfirmedOrderStyle>
  );
};

export default ConfirmedOrder;
