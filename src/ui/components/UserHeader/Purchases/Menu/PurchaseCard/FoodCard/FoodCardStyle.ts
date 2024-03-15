import styled from 'styled-components';
import style from '../../../../../../../style';

const FoodCardStyle = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid;

  .foodCard {
    &__imageBox {
      width: 100px;
      height: 100px;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }

    &__label {
      color: ${style.colors.black};
      font-weight: 600;
    }

    &__opennessSymbol {
      width: 10px;
      height: 10px;
    }

    &__description {
      width: 200px;
      height: 200px;
      overflow: auto;
    }

    &__descriptionButton {
      color: ${style.colors.violet};
      font-weight: 600;
      cursor: pointer;

      &:hover {
        text-shadow: 0 0 5px ${style.colors.white};
      }
    }

    &__addingButton {
      display: block;
    }
  }
`;

export default FoodCardStyle;
