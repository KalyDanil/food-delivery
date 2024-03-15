import styled from 'styled-components';

const AmountInputStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .amountInput {
    &__arrow {
      width: 40px;
      height: auto;
      cursor: pointer;

      &-disabled {
        opacity: 0.3;
        cursor: unset;
      }

      &-rotated {
        transform: rotate(180deg);
      }
    }

    &__amount {
      font-size: 18px;
    }

    &__garbage {
      width: 20px;
      height: auto;
      position: absolute;
      right: -35px;
      cursor: pointer;
    }
  }
`;

export default AmountInputStyle;
