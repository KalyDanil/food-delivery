import styled from 'styled-components';

const PurchasesStyle = styled.div`
  position: relative;

  .purchases {
    &__iconBox {
      position: relative;
      cursor: pointer;
    }

    &__icon {
      height: 50px;
      width: 50px;
    }

    &__counter {
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 30px;
      right: 20px;
      z-index: 1;
      background-color: #bbb;
      overflow: hidden;
      border-radius: 50%;
    }
  }
`;

export default PurchasesStyle;
