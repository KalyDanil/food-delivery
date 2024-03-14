import RegistrationStyle from './RegistrationStyle';
import { Formik } from 'formik';
import AuthInput from '../../../components/AuthInput';
import { useDispatch } from '../../../../utils/functions/hooks';
import userReq from '../../../../store/reducers/user/thunks';
import { registrationSchema } from '../../../../utils/schemes/registration';
import { useTranslation } from 'react-i18next';

const Registration = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  return (
    <RegistrationStyle>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordRepeat: '',
          displayName: '',
        }}
        validationSchema={registrationSchema}
        onSubmit={async (values) => {
          dispatch(userReq.signUp(values));
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <form className="registration__form" onSubmit={handleSubmit}>
            <AuthInput
              id="displayName"
              label={t('Display name')}
              type="displayName"
              handleChange={handleChange}
            />
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
            <AuthInput
              id="passwordRepeat"
              label={t('Password repeat')}
              type="password"
              handleChange={handleChange}
            />
            <button className="registration__submitButton" type="submit">
              {t('Sign up')}
            </button>
          </form>
        )}
      </Formik>
    </RegistrationStyle>
  );
};

export default Registration;
