import { ButtonProps } from "../../types";

const Button = ({
  className = '',
  children, 
  onClick, 
  type = 'button',
  disabled = false
}: ButtonProps) => {
  return (
    <button 
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
