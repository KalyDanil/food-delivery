import YupPassword from 'yup-password';
import * as yup from 'yup';
import i18n from '../../i18n';

YupPassword(yup);

export const authorizationSchema = yup.object().shape({
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
  password: yup.string().required(i18n.t('Obligatory field')),
});
