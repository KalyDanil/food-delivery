import styled from 'styled-components';
import style from '../../../../style';

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
      @media screen and (max-width: ${style.breakPoints.first}) {
        width: 30px;
        height: 30px;
      }
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
      background-color: ${style.colors.violet};
      color: ${style.colors.white};
      overflow: hidden;
      border-radius: 50%;
      @media screen and (max-width: ${style.breakPoints.first}) {
        width: 20px;
        height: 20px;
        top: 25px;
        font-size: ${style.fontSize.tiny};
      }
    }
  }
`;

export default PurchasesStyle;
