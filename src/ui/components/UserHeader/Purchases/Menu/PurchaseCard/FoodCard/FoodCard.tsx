import { useState } from 'react';
import { IOrderFood } from '../../../../../../../types/foods';
import FoodCardStyle from './FoodCardStyle';
import { useTranslation } from 'react-i18next';

const FoodCard: React.FC<{ food: IOrderFood }> = ({ food }) => {
  const { t } = useTranslation();

  const [descriptionIsOpen, setDescriptionIsOpen] = useState(false);

  const { name, image, price, description, amount } = food;

  return (
    <FoodCardStyle>
      <div className="foodCard__imageBox">
        <img className="foodCard__image" src={image} alt={name} />
      </div>
      <div>
        <span className="foodCard__label">{t('Name')}:</span> {name}
      </div>
      <div>
        <span
          className="foodCard__descriptionButton"
          onClick={() => setDescriptionIsOpen(!descriptionIsOpen)}
        >
          {t('Description')}
          {descriptionIsOpen ? '-' : '+'}
        </span>{' '}
        {descriptionIsOpen && <>:{description}</>}
      </div>
      <div>
        <span className="foodCard__label">{t('Price')}:</span> {price}$
      </div>
      <div>
        <span className="foodCard__label">{t('Amount')}:</span> {amount}
      </div>
    </FoodCardStyle>
  );
};

export default FoodCard;
