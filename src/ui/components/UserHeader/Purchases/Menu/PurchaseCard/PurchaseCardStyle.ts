import styled from 'styled-components';
import style from '../../../../../../style';

const PurchaseCardStyle = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  background-color: ${style.colors.lightPink};

  .purchaseCard {
    &__label {
      color: ${style.colors.black};
      font-weight: 600;
    }

    &__foodsButton {
      ${style.button.base}
      margin-bottom: 5px;
      border-radius: 10px;
    }

    &__foodsList {
      height: 200px;
      overflow: auto;
    }

    &__opennessSymbol {
      width: 10px;
      height: 10px;
    }
  }
`;

export default PurchaseCardStyle;
