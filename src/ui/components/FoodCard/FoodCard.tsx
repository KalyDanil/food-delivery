import { useEffect, useMemo, useState } from 'react';
import { IFood, IOrderFood } from '../../../types/foods';
import FoodCardStyle from './FoodCardStyle';
import AmountInput from '../AmountInput';
import { useDispatch, useSelector } from '../../../utils/functions/hooks';
import { userActions } from '../../../store/reducers/user/slicer';

const FoodCard: React.FC<{ food: IFood }> = ({ food }) => {
  const { currentOrder } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [descriptionIsOpen, setDescriptionIsOpen] = useState(false);

  const { id, name, price, description, image } = food;

  const amount: number = useMemo(() => {
    if (currentOrder.foods.length === 0) {
      return 0;
    }

    const food: IOrderFood | undefined = currentOrder.foods.find(
      (item) => item.id === id,
    );

    return food ? food.amount : 0;
  }, [currentOrder.foods]);

  const onClick = () => {
    const orderFood: IOrderFood = Object.assign({ amount: 1 }, food);

    dispatch(userActions.changeCurrentOrderFoods(orderFood));
  };

  const setAmount = (amount: number) => {
    const orderFood: IOrderFood = Object.assign({ amount }, food);

    dispatch(userActions.changeCurrentOrderFoods(orderFood));
  };

  return (
    <FoodCardStyle>
      <div className="foodCard__imageBox">
        <img className="foodCard__image" src={image} alt={name} />
      </div>
      <div>
        <span className="foodCard__label">Name:</span> {name}
      </div>
      <div>
        <span className="foodCard__label">Price:</span> {price}
      </div>
      <button
        className="foodCard__descriptionButton"
        onClick={() => setDescriptionIsOpen(!descriptionIsOpen)}
      >
        {!descriptionIsOpen ? 'Open' : 'Close'} escription
      </button>
      {descriptionIsOpen && (
        <div className="foodCard__description">
          <span className="foodCard__label">Description:</span> {description}
        </div>
      )}
      {amount > 0 ? (
        <AmountInput amount={amount} setAmount={setAmount} />
      ) : (
        <button className="foodCard__addingButton" onClick={onClick}>
          Add to shopping cart
        </button>
      )}
    </FoodCardStyle>
  );
};

export default FoodCard;
