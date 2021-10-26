import classNames from "classnames";

export default function Button({ type, children, onClick, className }) {
  const classes = classNames("btn", className);
  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  onClick: () => {},
};
