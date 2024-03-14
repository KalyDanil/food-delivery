import * as yup from 'yup';

export const orderSchema = yup.object().shape({
  street: yup.string().required('Обязательное поле'),
  home: yup
    .number()
    .required('Обязательное поле')
    .typeError('Must be a number'),
  entrance: yup
    .number()
    .required('Обязательное поле')
    .typeError('Must be a number'),
  apartment: yup
    .number()
    .required('Обязательное поле')
    .typeError('Must be a number'),
});
