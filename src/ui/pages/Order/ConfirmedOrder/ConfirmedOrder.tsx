import { IOrder } from '../../../../types/user';
import FoodCard from '../../../components/FoodCard';
import ConfirmedOrderStyle from './ConfirmedOrderStyle';

const ConfirmedOrder: React.FC<{ confirmedOrder: IOrder }> = ({
  confirmedOrder,
}) => {
  const { id, foods, address, paymentType, totalPrice } = confirmedOrder;

  const foodsList = foods.map((item) => (
    <FoodCard food={item} canOrder={false} key={item.id} />
  ));

  return (
    <ConfirmedOrderStyle>
      <h1>Order was confirmed</h1>
      <div>
        <span className="confirmedOrder__label">Order number:</span> {id}
      </div>
      <div className="confirmedOrder__foodBox">
        <span className="confirmedOrder__label">Foods</span>
        <div className="confirmedOrder__foodList">{foodsList}</div>
      </div>
      <div>
        <span className="confirmedOrder__label">Address:</span> {address.street}
        , {address.home}, {address.entrance}, {address.apartment}
      </div>
      <div>
        <span className="confirmedOrder__label">Payment type: </span>
        {paymentType}$
      </div>
      <div>
        <span className="confirmedOrder__label">Total price: </span>
        {totalPrice}$
      </div>
    </ConfirmedOrderStyle>
  );
};

export default ConfirmedOrder;
