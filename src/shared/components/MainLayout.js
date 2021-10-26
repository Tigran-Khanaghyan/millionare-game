export default function MainLayout({ left, center, right }) {
  return (
    <div className="wall">
      <div className="left">{left}</div>
      <div className="center">{center}</div>
      <div className="right">{right}</div>
    </div>
  );
}
