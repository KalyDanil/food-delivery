import styled from 'styled-components';
import style from '../../../../style';

const ConfirmedOrderStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2.5;
  color: ${style.colors.white};

  .confirmedOrder {
    &__label {
      color: ${style.colors.black};
      font-size: 18px;
      font-weight: 600;
    }

    &__foodBox {
      width: 100%;
      max-width: 1000px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }

    &__foodList {
      width: 80%;
      height: 350px;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      overflow: auto;
    }
  }
`;

export default ConfirmedOrderStyle;
