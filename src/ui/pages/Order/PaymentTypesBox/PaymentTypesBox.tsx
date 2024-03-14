import { useTranslation } from 'react-i18next';
import PaymentTypesBoxStyle from './PaymentTypesBoxStyle';

const PaymentTypesBox: React.FC<{
  paymentType: string;
  setFieldValue: (field: string, value: string) => void;
}> = ({ paymentType, setFieldValue }) => {
  const { t } = useTranslation();

  return (
    <PaymentTypesBoxStyle>
      <div
        className="paymentTypesBox__box"
        onClick={() => setFieldValue('paymentType', 'card')}
      >
        <div
          className={`paymentTypesBox__checkbox ${paymentType === 'card' && 'paymentTypesBox__checkbox-active'}`}
        />
        <span>{t('Card')}</span>
      </div>
      <div
        className="paymentTypesBox__box"
        onClick={() => setFieldValue('paymentType', 'cash')}
      >
        <div
          className={`paymentTypesBox__checkbox ${paymentType === 'cash' && 'paymentTypesBox__checkbox-active'}`}
        />
        <span>{t('Cash')}</span>
      </div>
    </PaymentTypesBoxStyle>
  );
};

export default PaymentTypesBox;
