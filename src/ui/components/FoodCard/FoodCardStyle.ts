import styled from 'styled-components';

const FoodCardStyle = styled.div`
  margin-bottom: 20px;

  .foodCard {
    &__imageBox {
      width: 200px;
      height: 200px;
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

    &__descriptionButton {
      display: block;
      margin-bottom: 10px;
    }

    &__description {
      width: 200px;
      height: 200px;
      overflow: auto;
    }

    &__addingButton {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default FoodCardStyle;
