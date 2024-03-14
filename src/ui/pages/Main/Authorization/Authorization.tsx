import AuthorizationStyle from './AuthorizationStyle';
import { Formik } from 'formik';
import { authorizationSchema } from './schema';
import AuthInput from '../../../components/AuthInput';
import userReq from '../../../../store/reducers/user/thunks';
import { useDispatch } from '../../../../utils/functions/hooks';

const Authorization = () => {
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
            <button type="submit">sign in</button>
          </form>
        )}
      </Formik>
    </AuthorizationStyle>
  );
};

export default Authorization;
