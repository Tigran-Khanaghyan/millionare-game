export default function Input({ type, onChange, name, id, className, value }) {
  return (
    <input
      type={type}
      onChange={onChange}
      name={name}
      id={id}
      value={value}
      className={className}
    ></input>
  );
}
