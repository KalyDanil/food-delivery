import YupPassword from 'yup-password';
import * as yup from 'yup';

YupPassword(yup);

export const registrationSchema = yup.object().shape({
  displayName: yup.string().required('Обязательное поле'),
  email: yup
    .string()
    .email('Такой почты не существует')
    .test('Email test', 'Такой почты не существует', (value) => {
      if (!value?.includes('.')) {
        return false;
      }
      return true;
    })
    .required('Обязательное поле'),
  password: yup
    .string()
    .min(6, 'Минимум 6 символов')
    .required('Обязательное поле'),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Обязательное поле'),
});
