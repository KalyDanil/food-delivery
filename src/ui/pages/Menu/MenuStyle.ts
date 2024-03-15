import styled from 'styled-components';
import style from '../../../style';

const MenuStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .menu {
    &__toMainPageButton {
      ${style.button.navigation}
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
