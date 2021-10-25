import classNames from "classnames";

export default function Button({ type, children, onClick, className }) {
  const classes = classNames("btn", className);
  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  onClick: () => {},
};
