import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import RegistrationStyle from "./RegistrationStyle";
import { toast } from "react-toastify";
import { Formik } from "formik";
import { registrationSchema } from "./scheme";
import AuthInput from "../../../components/AuthInput";

const Registration = () => {
  return (
    <RegistrationStyle>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordRepeat: "",
          displayName: "",
        }}
        validationSchema={registrationSchema}
        onSubmit={async (values) => {
          const auth = getAuth();

          try {
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );

            updateProfile(userCredential.user, {
              displayName: values.displayName,
            });
          } catch (error: any) {
            if (error.code === "auth/email-already-in-use") {
              toast("Email registered");
              return;
            }

            toast(error.message);
          }
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
