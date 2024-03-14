import styled from 'styled-components';

const MainStyle = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;

  .main {
    &__tabsBox {
      margin-bottom: 20px;
    }

    &__tab {
      &-active {
        color: white;
        background-color: blue;
      }
    }
  }
`;

export default MainStyle;
