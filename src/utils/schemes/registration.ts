import YupPassword from 'yup-password';
import * as yup from 'yup';
import i18n from '../../i18n';

YupPassword(yup);

export const registrationSchema = yup.object().shape({
  displayName: yup.string().required(i18n.t('Obligatory field')),
  email: yup
    .string()
    .email(i18n.t('Such mail does not exist'))
    .test('Email test', i18n.t('Such mail does not exist'), (value) => {
      if (!value?.includes('.')) {
        return false;
      }
      return true;
    })
    .required(i18n.t('Obligatory field')),
  password: yup
    .string()
    .min(6, i18n.t('Minimum 6 characters'))
    .required(i18n.t('Obligatory field')),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref('password')], i18n.t('Passwords mismatch'))
    .required(i18n.t('Obligatory field')),
});
