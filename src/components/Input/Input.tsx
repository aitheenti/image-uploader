import { InputProps } from "../../types";

const Input = ({
  id,
  type,
  placeholder,
  className,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
