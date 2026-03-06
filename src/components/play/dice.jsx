export function Dice({ value, hidden, selected, setDieVal }) {
  if (hidden) {
    return <div className="die face-unknown"></div>;
  }

  return (
    <div
      className={`die face-${value} ${selected ? 'selected' : ''}`}
      onClick={setDieVal}
    >
      {Array.from({ length: value }).map((_, i) => (
        <span key={i} className="dot"></span>
      ))}
    </div>
  );
}