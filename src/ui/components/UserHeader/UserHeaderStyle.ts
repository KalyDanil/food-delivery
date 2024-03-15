import styled from 'styled-components';
import style from '../../../style';

const UserHeaderStyle = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 10px;
  right: 10px;
  @media screen and (max-width: ${style.breakPoints.first}) {
    width: 150px;
    justify-content: space-around;
    position: relative;
    top: unset;
    right: unset;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }

  .userHeader {
    &__shoppingCartBox {
      position: relative;
      cursor: pointer;
    }

    &__shoppingCartIcon {
      width: 50px;
      height: 50px;
      cursor: pointer;
      @media screen and (max-width: ${style.breakPoints.first}) {
        width: 30px;
        height: 30px;
      }
    }

    &__totalPrice {
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

    &__box {
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (max-width: ${style.breakPoints.first}) {
        width: 50px;
      }
    }

    &__displayName {
      width: 100%;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-weight: 600;
      text-shadow:
        2px 2px 2px white,
        0 0 1em white,
        0 0 0.2em white;
      @media screen and (max-width: ${style.breakPoints.first}) {
        font-size: ${style.fontSize.tiny};
      }
    }

    &__logOut {
      ${style.button.base}
      font-size: ${style.fontSize.preMedium};
      border-radius: 10px;
      @media screen and (max-width: ${style.breakPoints.first}) {
        font-size: ${style.fontSize.small};
      }
    }
  }
`;

export default UserHeaderStyle;
