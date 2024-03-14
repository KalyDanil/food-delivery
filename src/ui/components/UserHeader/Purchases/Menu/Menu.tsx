import { useSelector } from '../../../../../utils/functions/hooks';
import PurchaseCard from './PurchaseCard';
import MenuStyle from './MenuStyle';

const Menu = () => {
  const { orders } = useSelector((state) => state.user);

  const purchasesList = orders.map((item) => (
    <PurchaseCard order={item} key={item.id} />
  ));
  return (
    <MenuStyle>
      <h3>Purchases</h3>
      <div className="menu__purchasesList">{purchasesList}</div>
    </MenuStyle>
  );
};

export default Menu;
