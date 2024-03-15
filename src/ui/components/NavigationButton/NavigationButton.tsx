import { useNavigate } from 'react-router-dom';
import NavigationButtonStyle from './NavigationButtonStyle';

const NavigationButton: React.FC<{ text: string; route: string }> = ({
  text,
  route,
}) => {
  const navigate = useNavigate();

  return (
    <NavigationButtonStyle onClick={() => navigate(route)}>
      {text}
    </NavigationButtonStyle>
  );
};

export default NavigationButton;
