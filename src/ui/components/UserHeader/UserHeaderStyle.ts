import styled from 'styled-components';

const UserHeaderStyle = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;

  .userHeader {
    &__shoppingCartBox {
    }

    &__shoppingCartIcon {
      width: 50px;
      height: auto;
      cursor: pointer;
    }

    &__totalPrice {
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #bbb;
      overflow: hidden;
      border-radius: 50%;
    }

    &__counter {
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
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
