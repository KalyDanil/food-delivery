import styled from 'styled-components';
import style from '../../../style';

const MainStyle = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;

  .main {
    &__tabsBox {
      width: 220px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    &__tab {
      ${style.button.base}
      border-radius: 10px;
      font-size: ${style.fontSize.preMedium};

      &-active {
        border: 1px solid;
        border-color: ${style.colors.white};
        background-color: ${style.colors.orange};
        box-shadow: 0 0 5px ${style.colors.white};
        color: ${style.colors.black};
      }
    }

    &__toMenuButton {
      ${style.button.base}
      border-radius: 10px;
      font-size: ${style.fontSize.large};
    }
  }
`;

export default MainStyle;
