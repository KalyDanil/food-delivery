import YupPassword from "yup-password";
import * as yup from "yup";

YupPassword(yup);

export const authorizationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Такой почты не существует")
    .test("Email test", "Такой почты не существует", (value) => {
      if (!value?.includes(".")) {
        return false;
      }
      return true;
    })
    .required("Обязательное поле"),
  password: yup.string().required("Обязательное поле"),
});
