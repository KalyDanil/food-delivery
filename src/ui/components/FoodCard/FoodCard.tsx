import { useEffect, useMemo, useRef, useState } from 'react';
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

  const endRef = useRef<HTMLDivElement>(null);

  const { id, name, price, description, image } = food;

  useEffect(() => {
    if (descriptionIsOpen && endRef.current) {
      endRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, [descriptionIsOpen]);

  const amount: number = useMemo(() => {
    if (chosenFoods.length === 0) {
      return 0;
    }

    const food: IOrderFood | undefined = chosenFoods.find(
      (item) => item.id === id,
    );

    return food ? food.amount : 0;
  }, [chosenFoods, id]);

  const onClick = () => {
    const orderFood: IOrderFood = Object.assign({ amount: 1 }, food);

    dispatch(userActions.changeChosenFoods(orderFood));
  };

  const setAmount = (amount: number) => {
    const orderFood: IOrderFood = Object.assign({ amount }, food);

    dispatch(userActions.changeChosenFoods(orderFood));
  };

  return (
    <FoodCardStyle descriptionIsOpen={descriptionIsOpen}>
      <div className="foodCard__imageBox">
        <img className="foodCard__image" src={image} alt={name} />
      </div>
      <div className="foodCard__infoBox">
        <div>
          <span className="foodCard__label">{t('Name')}:</span> {name}
        </div>
        <div>
          <span className="foodCard__label">{t('Price')}:</span> {price}$
        </div>
        <div
          className="foodCard__description"
          onClick={() => setDescriptionIsOpen(!descriptionIsOpen)}
        >
          <span className="foodCard__descriptionButton">
            {descriptionIsOpen ? '-' : '+'}
            {t('Description')}
            {descriptionIsOpen && ':'}
          </span>
          {descriptionIsOpen && <span> {description}</span>}
        </div>
      </div>
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
          <span className="foodCard__label">{t('Amount')}:</span> {amount}
        </div>
      )}
      <div ref={endRef} />
    </FoodCardStyle>
  );
};

export default FoodCard;
