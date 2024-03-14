import { useState } from 'react';
import { IOrder } from '../../../../../../types/user';
import FoodCard from './FoodCard';
import PurchaseCardStyle from './PurchaseCardStyle';

const PurchaseCard: React.FC<{ order: IOrder }> = ({ order }) => {
  const [foodsIsOpen, setFoodsIsOpen] = useState(false);

  const { id, foods, address, totalPrice, paymentType } = order;

  const foodsList = foods.map((item) => <FoodCard food={item} key={item.id} />);

  return (
    <PurchaseCardStyle>
      <div>
        <span className="purchaseCard__label">Order number:</span> {id}
      </div>
      <div>
        <span className="purchaseCard__label">Total price:</span> {totalPrice}$
      </div>
      <div>
        <button
          className="purchaseCard__foodsButton"
          onClick={() => setFoodsIsOpen(!foodsIsOpen)}
        >
          Foods{' '}
          <img
            className="purchaseCard__opennessSymbol"
            src={`/assets/icons/${foodsIsOpen ? 'minus.svg' : 'plus.svg'}`}
            alt="plus"
          />
        </button>
        {foodsIsOpen && <div>{foodsList}</div>}
      </div>
      <div>
        <span className="purchaseCard__label">Address:</span> {address.street},{' '}
        {address.home}, {address.entrance}, {address.apartment}
      </div>
      <div>
        <span className="purchaseCard__label">Payment type:</span> {paymentType}
      </div>
    </PurchaseCardStyle>
  );
};

export default PurchaseCard;
