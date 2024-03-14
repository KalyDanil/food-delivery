import { useDispatch, useSelector } from '../../../utils/functions/hooks';
import FoodCard from '../../components/FoodCard';
import OrderStyle from './OrderStyle';
import { IOrderFood } from '../../../types/foods';
import { Formik } from 'formik';
import Input from './Input';
import PaymentTypesBox from './PaymentTypesBox';
import userReq from '../../../store/reducers/user/thunks';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/routes';
import { IOrder } from '../../../types/user';
import { useState } from 'react';
import ConfirmedOrder from './ConfirmedOrder';
import { orderSchema } from '../../../utils/schemes/order';
import { useTranslation } from 'react-i18next';

const Order = () => {
  const { t } = useTranslation();

  const { chosenFoods } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [confirmedOrder, setConfirmedOrder] = useState<IOrder | null>(null);

  const foodsList = chosenFoods.map((item: IOrderFood) => {
    const food = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
    };
    return <FoodCard food={food} key={food.id} />;
  });

  const totalPrice = chosenFoods.reduce(
    (accumulator: number, food: IOrderFood) => {
      return accumulator + food.price * food.amount;
    },
    0,
  );

  if (confirmedOrder) {
    return <ConfirmedOrder confirmedOrder={confirmedOrder} />;
  }

  return (
    <OrderStyle>
      <h1>{t('Order')}</h1>
      <button
        className="order__toMenuButton"
        onClick={() => navigate(ROUTES.MENU)}
      >
        {t('To menu')}
      </button>
      <div className="order__foodsList">{foodsList}</div>
      <Formik
        initialValues={{
          street: '',
          home: '',
          entrance: '',
          apartment: '',
          paymentType: 'card',
        }}
        validationSchema={orderSchema}
        onSubmit={async (values) => {
          const address = {
            street: values.street,
            home: values.home,
            entrance: values.entrance,
            apartment: values.apartment,
          };

          const data = {
            address,
            paymentType: values.paymentType,
            foods: chosenFoods,
            totalPrice,
          };

          dispatch(userReq.makeOrder({ data, setConfirmedOrder }));
        }}
      >
        {({ handleChange, handleSubmit, values, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Input
              id="street"
              label={t('Street')}
              type="text"
              handleChange={handleChange}
            />
            <Input
              id="home"
              label={t('Home')}
              type="text"
              handleChange={handleChange}
            />
            <Input
              id="entrance"
              label={t('Entrance')}
              type="text"
              handleChange={handleChange}
            />
            <Input
              id="apartment"
              label={t('Apartment')}
              type="text"
              handleChange={handleChange}
            />
            <PaymentTypesBox
              paymentType={values.paymentType}
              setFieldValue={setFieldValue}
            />
            <div>
              {t('Total price')}: {totalPrice}$
            </div>
            <button type="submit">{t('Make order')}</button>
          </form>
        )}
      </Formik>
    </OrderStyle>
  );
};

export default Order;
