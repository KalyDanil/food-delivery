import styled from 'styled-components';

const ConfirmedOrderStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .confirmedOrder {
    &__label {
      font-size: 18px;
      font-weight: 600;
    }

    &__foodBox {
      width: 100%;
      max-width: 1000px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid;
    }

    &__foodList {
      width: 100%;
      height: 320px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      overflow: auto;
      border: 1px solid;
    }
  }
`;

export default ConfirmedOrderStyle;
