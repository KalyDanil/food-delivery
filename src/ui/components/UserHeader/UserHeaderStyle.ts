import styled from 'styled-components';

const UserHeaderStyle = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;

  .userHeader {
    &__shoppingCartBox {
      position: relative;
      cursor: pointer;
    }

    &__shoppingCartIcon {
      width: 50px;
      height: 50px;
      cursor: pointer;
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
      background-color: #bbb;
      overflow: hidden;
      border-radius: 50%;
    }

    &__logOut {
      margin-left: 10px;
    }
  }
`;

export default UserHeaderStyle;