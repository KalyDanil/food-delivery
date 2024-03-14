import { useMemo, useState } from 'react';
import { IFood, IOrderFood } from '../../../types/foods';
import FoodCardStyle from './FoodCardStyle';
import AmountInput from './AmountInput';
import { useDispatch, useSelector } from '../../../utils/functions/hooks';
import { userActions } from '../../../store/reducers/user/slicer';
import { useTranslation } from 'react-i18next';

const FoodCard: React.FC<{ food: IFood; canOrder?: boolean }> = ({
  food,
  canOrder = true,
}) => {
  const { t } = useTranslation();

  const { chosenFoods } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [descriptionIsOpen, setDescriptionIsOpen] = useState(false);

  const { id, name, price, description, image } = food;

  const amount: number = useMemo(() => {
    if (chosenFoods.length === 0) {
      return 0;
    }

    const food: IOrderFood | undefined = chosenFoods.find(
      (item) => item.id === id,
    );

    return food ? food.amount : 0;
  }, [chosenFoods]);

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
        <span className="foodCard__label">{t('Name')}:</span> {name}
      </div>
      <div>
        <span className="foodCard__label">{t('Price')}:</span> {price}$
      </div>
      <button
        className="foodCard__descriptionButton"
        onClick={() => setDescriptionIsOpen(!descriptionIsOpen)}
      >
        {!descriptionIsOpen ? 'Open' : 'Close'} {t('Description')}
      </button>
      {descriptionIsOpen && (
        <div className="foodCard__description">
          <span className="foodCard__label">{t('Description')}:</span>{' '}
          {description}
        </div>
      )}
      {canOrder ? (
        <>
          {amount > 0 ? (
            <AmountInput amount={amount} setAmount={setAmount} />
          ) : (
            <button className="foodCard__addingButton" onClick={onClick}>
              {t('Add to shopping cart')}
            </button>
          )}
        </>
      ) : (
        <div>
          {t('Amount')}: {amount}
        </div>
      )}
    </FoodCardStyle>
  );
};

export default FoodCard;
