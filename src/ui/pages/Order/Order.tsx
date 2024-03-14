import { useDispatch, useSelector } from '../../../utils/functions/hooks';
import FoodCard from '../../components/FoodCard';
import OrderStyle from './OrderStyle';
import { IOrderFood } from '../../../types/foods';
import { Formik } from 'formik';
import Input from './Input';
import PaymentTypesBox from './PaymentTypesBox';
import { orderSchema } from './schema';
import userReq from '../../../store/reducers/user/thunks';

const Order = () => {
  const { currentOrder, account } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const foodsList = currentOrder.foods.map((item: IOrderFood) => {
    const food = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
    };
    return <FoodCard food={food} key={food.id} />;
  });

  return (
    <OrderStyle>
      <h1>Order</h1>
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
            userId: account.id,
            address,
            paymentType: values.paymentType,
            foods: currentOrder.foods,
          };

          dispatch(userReq.makeOrder(data));
        }}
      >
        {({ handleChange, handleSubmit, values, setFieldValue }) => (
          <form className="authorization__form" onSubmit={handleSubmit}>
            <Input
              id="street"
              label="Street"
              type="text"
              handleChange={handleChange}
            />
            <Input
              id="home"
              label="Home"
              type="text"
              handleChange={handleChange}
            />
            <Input
              id="entrance"
              label="Entrance"
              type="text"
              handleChange={handleChange}
            />
            <Input
              id="apartment"
              label="Apartment"
              type="text"
              handleChange={handleChange}
            />
            <PaymentTypesBox
              paymentType={values.paymentType}
              setFieldValue={setFieldValue}
            />
            <button type="submit">Make order</button>
          </form>
        )}
      </Formik>
    </OrderStyle>
  );
};

export default Order;
