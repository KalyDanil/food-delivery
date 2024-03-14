import RegistrationStyle from './RegistrationStyle';
import { Formik } from 'formik';
import { registrationSchema } from './schema';
import AuthInput from '../../../components/AuthInput';
import { useDispatch } from '../../../../utils/functions/hooks';
import userReq from '../../../../store/reducers/user/thunks';

const Registration = () => {
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
              label="Display name"
              type="displayName"
              handleChange={handleChange}
            />
            <AuthInput
              id="email"
              label="Email"
              type="email"
              handleChange={handleChange}
            />
            <AuthInput
              id="password"
              label="Password"
              type="password"
              handleChange={handleChange}
            />
            <AuthInput
              id="passwordRepeat"
              label="Password repeat"
              type="password"
              handleChange={handleChange}
            />
            <button className="registration__submitButton" type="submit">
              sign up
            </button>
          </form>
        )}
      </Formik>
    </RegistrationStyle>
  );
};

export default Registration;
