export default function Input({
  type,
  onChange,
  name,
  id,
  className,
  value,
  checked,
}) {
  return (
    <input
      checked={checked}
      type={type}
      onChange={onChange}
      name={name}
      id={id}
      value={value}
      className={className}
    ></input>
  );
}
