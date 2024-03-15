import { RuleSet, css } from 'styled-components';
import { colors } from './colors';

const base: RuleSet<object> = css`
  padding: 5px;
  outline: none !important;
  border: none;
  border-radius: 10px;
  background-color: ${colors.white};

  &:focus {
    border: 1px solid ${colors.white};
    box-shadow: 0 0 10px ${colors.white};
  }
`;

const input = {
  base,
};

export default input;
