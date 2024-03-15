import styled from 'styled-components';
import style from '../../../../../style';

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
  background-color: ${style.colors.orange};
  box-shadow: 0 0 5px ${style.colors.white};
  color: white;
  @media screen and (max-width: ${style.breakPoints.first}) {
    top: 40px;
    right: unset;
    left: -40px;
  }

  .menu {
    &__purchasesList {
      height: 90%;
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;

export default MenuStyle;
