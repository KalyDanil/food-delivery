import AmountInputStyle from './AmountInputStyle';

const AmountInput: React.FC<{
  amount: number;
  setAmount: (amount: number) => void;
}> = ({ amount, setAmount }) => {
  const onClick = (isIncrease: boolean) => {
    if (isIncrease && amount < 99) {
      setAmount(amount + 1);
      return;
    }
    if (!isIncrease && amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <AmountInputStyle>
      <img
        className={`amountInput__arrow ${amount === 0 && 'amountInput__arrow-disabled'}`}
        src="/assets/icons/arrow.svg"
        onClick={() => onClick(false)}
        alt="arrow"
      />
      <span className="amountInput__amount">{amount}</span>
      <img
        className={`amountInput__arrow amountInput__arrow-rotated ${amount === 99 && 'amountInput__arrow-disabled'}`}
        src="/assets/icons/arrow.svg"
        onClick={() => onClick(true)}
        alt="arrow"
      />
      <img
        className="amountInput__garbage"
        src="/assets/icons/garbage.svg"
        onClick={() => setAmount(0)}
        alt="garbage"
      />
    </AmountInputStyle>
  );
};

export default AmountInput;
