import { ErrorMessage } from 'formik';
import { IInputProps } from '../../../../types/user';
import InputBoxStyle from './InputBoxStyle';

const InputBox = (props: IInputProps) => {
  const { id, label, handleChange, type } = props;

  return (
    <InputBoxStyle>
      <label className="inputBox__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="inputBox__input"
        type={type}
        autoComplete={id === 'password' ? 'on' : ''}
        onChange={handleChange}
      />
      <ErrorMessage className="inputBox__error" name={id} component="div" />
    </InputBoxStyle>
  );
};

export default InputBox;
