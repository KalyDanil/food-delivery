import * as yup from 'yup';
import i18n from '../../i18n';

export const orderSchema = yup.object().shape({
  street: yup.string().required(i18n.t('Obligatory field')),
  home: yup
    .number()
    .required(i18n.t('Obligatory field'))
    .typeError('Must be a number'),
  entrance: yup
    .number()
    .required(i18n.t('Obligatory field'))
    .typeError('Must be a number'),
  apartment: yup
    .number()
    .required(i18n.t('Obligatory field'))
    .typeError('Must be a number'),
});
