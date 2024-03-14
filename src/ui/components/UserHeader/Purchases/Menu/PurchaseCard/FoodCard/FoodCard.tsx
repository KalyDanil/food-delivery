import { useState } from 'react';
import { IOrderFood } from '../../../../../../../types/foods';
import FoodCardStyle from './FoodCardStyle';

const FoodCard: React.FC<{ food: IOrderFood }> = ({ food }) => {
  const [descriptionIsOpen, setDescriptionIsOpen] = useState(false);

  const { name, image, price, description, amount } = food;

  return (
    <FoodCardStyle>
      <div className="foodCard__imageBox">
        <img className="foodCard__image" src={image} alt={name} />
      </div>
      <div>
        <span className="foodCard__label">Name:</span> {name}
      </div>
      <div>
        <span
          className="foodCard__label"
          onClick={() => setDescriptionIsOpen(!descriptionIsOpen)}
        >
          Description{' '}
          <img
            className="foodCard__opennessSymbol"
            src={`/assets/icons/${descriptionIsOpen ? 'minus.svg' : 'plus.svg'}`}
            alt="openness symbol"
          />
        </span>{' '}
        {descriptionIsOpen && <>:{description}</>}
      </div>
      <div>
        <span className="foodCard__label">Price:</span> {price}$
      </div>
      <div>
        <span className="foodCard__label">Amount:</span> {amount}
      </div>
    </FoodCardStyle>
  );
};

export default FoodCard;
