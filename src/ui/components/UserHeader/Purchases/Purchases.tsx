import { useEffect, useState } from 'react';
import { useSelector } from '../../../../utils/functions/hooks';
import PurchasesStyle from './PurchasesStyle';
import Menu from './Menu';
import { useTranslation } from 'react-i18next';

const Purchases = () => {
  const { t } = useTranslation();

  const { orders } = useSelector((state) => state.user);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const clickHandler = () => {
    setMenuIsOpen(false);
  };

  useEffect(() => {
    if (menuIsOpen) {
      document.addEventListener('click', clickHandler);
      return;
    }

    document.removeEventListener('click', clickHandler);
  }, [menuIsOpen]);

  return (
    <PurchasesStyle onClick={(e) => e.stopPropagation()}>
      {menuIsOpen && <Menu />}
      <div
        className="purchases__iconBox"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <img
          className="purchases__icon"
          src="/assets/icons/purchases.svg"
          alt="purchases"
        />
        <div className="purchases__counter">
          {orders.length}
          {t('qt')}.
        </div>
      </div>
    </PurchasesStyle>
  );
};

export default Purchases;
