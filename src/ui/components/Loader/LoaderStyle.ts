import styled from 'styled-components';
import style from '../../../style';

const LoaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  color: black;
  background-color: rgba(0, 0, 0, 0.75);
  animation-name: appear;
  animation-duration: 300ms;

  .loader {
    &__icon {
      width: 120px;
      height: 120px;
      border: 16px solid ${style.colors.white}; /* Light grey */
      border-top: 16px solid ${style.colors.violet}; /* Blue */
      border-radius: 50%;
      animation: spin 2s linear infinite;

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export default LoaderStyle;
