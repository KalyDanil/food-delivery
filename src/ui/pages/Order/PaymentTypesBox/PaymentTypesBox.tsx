import PaymentTypesBoxStyle from './PaymentTypesBoxStyle';

const PaymentTypesBox: React.FC<{
  paymentType: string;
  setFieldValue: (field: string, value: string) => void;
}> = ({ paymentType, setFieldValue }) => {
  return (
    <PaymentTypesBoxStyle>
      <div
        className="paymentTypesBox__box"
        onClick={() => setFieldValue('paymentType', 'card')}
      >
        <div
          className={`paymentTypesBox__checkbox ${paymentType === 'card' && 'paymentTypesBox__checkbox-active'}`}
        />
        <span>Card</span>
      </div>
      <div
        className="paymentTypesBox__box"
        onClick={() => setFieldValue('paymentType', 'cash')}
      >
        <div
          className={`paymentTypesBox__checkbox ${paymentType === 'cash' && 'paymentTypesBox__checkbox-active'}`}
        />
        <span>Cash</span>
      </div>
    </PaymentTypesBoxStyle>
  );
};

export default PaymentTypesBox;
