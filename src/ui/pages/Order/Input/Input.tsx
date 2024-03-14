import { ErrorMessage } from 'formik';
import { IInputProps } from '../../../../types/user';
import InputStyle from './InputStyle';

const Input = (props: IInputProps) => {
  const { id, label, handleChange, type } = props;

  return (
    <InputStyle>
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={id === 'password' ? 'on' : ''}
        onChange={handleChange}
      />
      <ErrorMessage className="input__error" name={id} component="div" />
    </InputStyle>
  );
};

export default Input;
