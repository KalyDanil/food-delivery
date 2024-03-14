import * as yup from 'yup';

export const orderSchema = yup.object().shape({
  street: yup.string().required('Обязательное поле'),
  home: yup.string().required('Обязательное поле'),
  entrance: yup.string().required('Обязательное поле'),
  apartment: yup.string().required('Обязательное поле'),
});
