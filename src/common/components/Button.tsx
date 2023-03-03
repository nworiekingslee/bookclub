import "../styles/Button.css";

interface ButtonProps {
  onClick: () => void;
}

function Button({ onClick }: ButtonProps) {
  return (
    <button className="btn-reuse" onClick={onClick}>
      Register
    </button>
  );
}

export default Button;
