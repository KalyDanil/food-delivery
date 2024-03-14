import { useState } from 'react';
import { IOrder } from '../../../../../../types/user';
import FoodCard from './FoodCard';
import PurchaseCardStyle from './PurchaseCardStyle';
import { useTranslation } from 'react-i18next';

const PurchaseCard: React.FC<{ order: IOrder }> = ({ order }) => {
  const { t } = useTranslation();

  const [foodsIsOpen, setFoodsIsOpen] = useState(false);

  const { id, foods, address, totalPrice, paymentType } = order;

  const foodsList = foods.map((item) => <FoodCard food={item} key={item.id} />);

  return (
    <PurchaseCardStyle>
      <div>
        <span className="purchaseCard__label">{t('Order number')}:</span> {id}
      </div>
      <div>
        <span className="purchaseCard__label">{t('Total price')}:</span>{' '}
        {totalPrice}$
      </div>
      <div>
        <button
          className="purchaseCard__foodsButton"
          onClick={() => setFoodsIsOpen(!foodsIsOpen)}
        >
          {t('Foods')}
          <img
            className="purchaseCard__opennessSymbol"
            src={`/assets/icons/${foodsIsOpen ? 'minus.svg' : 'plus.svg'}`}
            alt="plus"
          />
        </button>
        {foodsIsOpen && <div>{foodsList}</div>}
      </div>
      <div>
        <span className="purchaseCard__label">{t('Address')}:</span>{' '}
        {address.street}, {address.home}, {address.entrance},{' '}
        {address.apartment}
      </div>
      <div>
        <span className="purchaseCard__label">{t('Payment type')}:</span>{' '}
        {paymentType}
      </div>
    </PurchaseCardStyle>
  );
};

export default PurchaseCard;
