import MainStyle from './MainStyle';
import Registration from './Registration';
import Authorization from './Authorization';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/routes';
import { useSelector } from '../../../utils/functions/hooks';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();

  const { account } = useSelector((state) => state.user);

  const [isRegistration, setIsRegistration] = useState(true);

  const navigate = useNavigate();

  return (
    <MainStyle>
      <h1>{t('Food delivery')}</h1>
      {account.id ? (
        <div>
          <button onClick={() => navigate(ROUTES.MENU)}>{t('To menu')}</button>
        </div>
      ) : (
        <>
          {' '}
          <div className="main__tabsBox">
            <button
              className={`main__tab ${
                isRegistration ? 'main__tab-active' : ''
              }`}
              onClick={() => setIsRegistration(true)}
            >
              {t('Registration')}
            </button>{' '}
            <button
              className={`main__tab ${
                !isRegistration ? 'main__tab-active' : ''
              }`}
              onClick={() => setIsRegistration(false)}
            >
              {t('Authorization')}
            </button>
          </div>
          {isRegistration ? <Registration /> : <Authorization />}
        </>
      )}
    </MainStyle>
  );
};

export default Main;
