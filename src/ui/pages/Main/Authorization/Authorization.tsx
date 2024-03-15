import AuthorizationStyle from './AuthorizationStyle';
import { Formik } from 'formik';
import AuthInput from '../../../components/AuthInput';
import userReq from '../../../../store/reducers/user/thunks';
import { useDispatch } from '../../../../utils/functions/hooks';
import { authorizationSchema } from '../../../../utils/schemes/authorization';
import { useTranslation } from 'react-i18next';

const Authorization = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  return (
    <AuthorizationStyle>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={authorizationSchema}
        onSubmit={async (values) => {
          dispatch(userReq.signIn(values));
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <form className="authorization__form" onSubmit={handleSubmit}>
            <div className="authorization__inputsBox">
              <AuthInput
                id="email"
                label={t('Email')}
                type="email"
                handleChange={handleChange}
              />
              <AuthInput
                id="password"
                label={t('Password')}
                type="password"
                handleChange={handleChange}
              />
            </div>
            <button className="authorization__submitButton" type="submit">
              {t('Sign in')}
            </button>
          </form>
        )}
      </Formik>
    </AuthorizationStyle>
  );
};

export default Authorization;
