import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/routes';
import MenuStyle from './MenuStyle';
import { useDispatch, useSelector } from '../../../utils/functions/hooks';
import { useEffect, useRef, useState } from 'react';
import foodsReq from '../../../store/reducers/foods/thunks';
import FoodCard from '../../components/FoodCard';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();

  const { foods } = useSelector((state) => state.foods);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [limit, setLimit] = useState(20);

  const listRef = useRef(null);

  useEffect(() => {
    dispatch(foodsReq.getFoods(limit));
  }, [dispatch, limit]);

  const onScroll = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setLimit(limit + 10);
      }
    }
  };

  const menu = foods.map((item) => <FoodCard food={item} key={item.id} />);

  return (
    <MenuStyle>
      <h1>{t('Menu')}</h1>
      <div className="menu__list" ref={listRef} onScroll={onScroll}>
        {menu}
      </div>
      <button
        className="menu__toMainPageButton"
        onClick={() => navigate(ROUTES.MAIN)}
      >
        {t('To main')}
      </button>
    </MenuStyle>
  );
};

export default Menu;
