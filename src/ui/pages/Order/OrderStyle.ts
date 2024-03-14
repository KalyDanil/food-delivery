import styled from 'styled-components';

const OrderStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .order {
    &__foodsList {
      width: 100%;
      height: 340px;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      overflow: auto;
      border: 1px solid;
    }
  }
`;

export default OrderStyle;
