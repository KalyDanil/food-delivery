import { useTranslation } from 'react-i18next';
import NotFoundStyle from './NotFoundStyle';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <NotFoundStyle>
      <h1>{t('Page not found')}</h1>
    </NotFoundStyle>
  );
};

export default NotFound;
