import styled from 'styled-components';
import style from '../../../style';

const FoodCardStyle = styled.div<{ descriptionIsOpen: boolean }>`
  width: 200px;
  height: ${(props) => (props.descriptionIsOpen ? 'auto' : '320px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: ${style.colors.lightPink};
  border-radius: 10px;
  line-height: 1.5;
  color: ${style.colors.white};

  .foodCard {
    &__imageBox {
    }

    &__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
    }

    &__infoBox {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
    }

    &__label {
      font-weight: 600;
    }

    &__description {
      width: 190px;
      padding: 0 5px 0 5px;
      height: ${(props) => (props.descriptionIsOpen ? '200px' : 'unset')};
      text-align: ${(props) => (props.descriptionIsOpen ? 'unset' : 'center')};
      overflow: auto;
      color: ${style.colors.white};
    }

    &__descriptionButton {
      color: ${style.colors.violet};
      font-weight: 600;
      margin-bottom: 10px;
      cursor: pointer;

      &:hover {
        text-shadow: 0 0 5px ${style.colors.white};
      }
    }

    &__addingButton {
      ${style.button.base}
      width: 100%;
      position: relative;
      top: 5px;
      display: block;
      font-size: ${style.fontSize.medium};
    }
  }
`;

export default FoodCardStyle;
