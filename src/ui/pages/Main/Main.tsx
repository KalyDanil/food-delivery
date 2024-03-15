import MainStyle from './MainStyle';
import Registration from './Registration';
import Authorization from './Authorization';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/routes';
import { useTranslation } from 'react-i18next';
import { LS_USER_ID } from '../../../utils/constants/storage';

const Main = () => {
  const { t } = useTranslation();

  const [isRegistration, setIsRegistration] = useState(false);

  const navigate = useNavigate();

  return (
    <MainStyle>
      <h1>{t('Food delivery')}</h1>
      {localStorage.getItem(LS_USER_ID) ? (
        <div>
          <button
            className="main__toMenuButton"
            onClick={() => navigate(ROUTES.MENU)}
          >
            {t('To menu')}
          </button>
        </div>
      ) : (
        <>
          {' '}
          <div className="main__tabsBox">
            <button
              className={`main__tab ${
                !isRegistration ? 'main__tab-active' : ''
              }`}
              onClick={() => setIsRegistration(false)}
            >
              {t('Authorization')}
            </button>
            <button
              className={`main__tab ${
                isRegistration ? 'main__tab-active' : ''
              }`}
              onClick={() => setIsRegistration(true)}
            >
              {t('Registration')}
            </button>
          </div>
          {isRegistration ? <Registration /> : <Authorization />}
        </>
      )}
    </MainStyle>
  );
};

export default Main;
