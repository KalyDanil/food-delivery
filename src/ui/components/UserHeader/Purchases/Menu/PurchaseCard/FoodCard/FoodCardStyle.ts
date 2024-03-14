import styled from 'styled-components';

const FoodCardStyle = styled.div`
  margin-bottom: 10px;

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

    &__addingButton {
      display: block;
    }
  }
`;

export default FoodCardStyle;
