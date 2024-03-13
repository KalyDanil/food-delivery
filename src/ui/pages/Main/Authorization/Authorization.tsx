import AuthorizationStyle from "./AuthorizationStyle";
import { Formik } from "formik";
import { authorizationSchema } from "./scheme";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import AuthInput from "../../../components/AuthInput";

const Authorization = () => {
  return (
    <AuthorizationStyle>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={authorizationSchema}
        onSubmit={(values) => {
          const auth = getAuth();

          signInWithEmailAndPassword(auth, values.email, values.password).catch(
            (error) => {
              if (error.code === "auth/invalid-credential") {
                toast("Email or password is wrong");
                return;
              }

              toast(error.message);
            }
          );
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
