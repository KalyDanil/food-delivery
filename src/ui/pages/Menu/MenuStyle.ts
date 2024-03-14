import styled from 'styled-components';

const MenuStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .menu {
    &__toMainPageButton {
      position: absolute;
      top: 10px;
      left: 10px;
    }

    &__list {
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      overflow: auto;
    }
  }
`;

export default MenuStyle;
