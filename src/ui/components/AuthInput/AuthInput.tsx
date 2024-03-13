import { ErrorMessage } from "formik";
import { AuthInputProps } from "../../../types/auth";
import AuthInputStyle from "./AuthInputStyle";

const AuthInput = (props: AuthInputProps) => {
  const { id, label, handleChange, type } = props;
  return (
    <AuthInputStyle>
      <label className="authInput__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={id === "password" ? "on" : ""}
        onChange={handleChange}
      />
      <ErrorMessage className="authInput__error" name={id} component="div" />
    </AuthInputStyle>
  );
};

export default AuthInput;