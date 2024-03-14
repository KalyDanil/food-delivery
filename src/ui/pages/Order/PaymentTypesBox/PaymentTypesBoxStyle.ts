import styled from 'styled-components';

const PaymentTypesBoxStyle = styled.div`
  width: 140px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;

  .paymentTypesBox {
    &__box {
      display: flex;
      cursor: pointer;
    }

    &__checkbox {
      height: 20px;
      width: 20px;
      margin-right: 5px;
      background-color: #bbb;
      border-radius: 50%;
      cursor: pointer;

      &-active {
        background-color: orange;
      }
    }
  }
`;

export default PaymentTypesBoxStyle;
