import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/routes';
import MenuStyle from './MenuStyle';
import { useMemo, useRef } from 'react';
import FoodCard from '../../components/FoodCard';
import { useTranslation } from 'react-i18next';
import { useInfiniteQuery } from '@tanstack/react-query';
import foodsApi from '../../../api/foods';

const Menu = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['todos'],
    refetchOnWindowFocus: false,
    queryFn: ({ pageParam }) => foodsApi.getFoods(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage?.length + 10;
    },
    initialPageParam: 20,
  });

  const listRef = useRef(null);

  const onScroll = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchNextPage();
      }
    }
  };

  const foods = useMemo(() => {
    if (data) {
      return data.pages[data.pages.length - 1];
    }

    return [];
  }, [data]);

  const menu = foods?.map((item) => <FoodCard food={item} key={item.id} />);

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
