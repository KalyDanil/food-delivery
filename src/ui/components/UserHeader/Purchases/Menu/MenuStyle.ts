import styled from 'styled-components';

const MenuStyle = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 70px;
  right: 30px;
  z-index: 100;
  border: 1px solid;
  border-radius: 10px;
  background-color: gray;
  color: white;

  .menu {
    &__purchasesList {
      height: 90%;
      padding-left: 5px;
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;

export default MenuStyle;
