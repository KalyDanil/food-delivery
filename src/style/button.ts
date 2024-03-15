import { RuleSet, css } from 'styled-components';
import { colors } from './colors';
import { fontSize } from './fonts';
import breakPoints from './breakPoints';

const base: RuleSet<object> = css`
  padding: 5px;
  border: none;
  background-color: ${colors.violet};
  color: ${colors.white};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border-color: ${colors.white};
    box-shadow: 0 0 5px ${colors.white};
  }
`;

const navigation: RuleSet<object> = css`
  ${base}
  border-radius: 10px;
  font-size: ${fontSize.medium};
  border-radius: 10px;
  @media screen and (max-width: ${breakPoints.first}) {
    font-size: ${fontSize.small};
  }
`;

const button = {
  base,
  navigation,
};

export default button;
