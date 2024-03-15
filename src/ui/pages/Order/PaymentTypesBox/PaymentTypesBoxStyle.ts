import styled from 'styled-components';
import style from '../../../../style';

const PaymentTypesBoxStyle = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;

  .paymentTypesBox {
    &__box {
      display: flex;
      margin-right: 10px;
      font-size: ${style.fontSize.medium};
      font-weight: 600;
    }

    &__checkbox {
      height: 20px;
      width: 20px;
      margin-right: 5px;
      background-color: ${style.colors.violet};
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        border: 1px solid ${style.colors.white};
        box-shadow: 0 0 5px ${style.colors.white};
      }

      &-active {
        background-color: ${style.colors.orange};
        border: 1px solid ${style.colors.white};
        box-shadow: 0 0 5px ${style.colors.white};
      }
    }
  }
`;

export default PaymentTypesBoxStyle;
