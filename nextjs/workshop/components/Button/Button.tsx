import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
