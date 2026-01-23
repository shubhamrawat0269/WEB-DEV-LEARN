export default function ContextMenu({ x, y, onDelete }) {
  return (
    <ul className="context-menu" style={{ top: y, left: x }}>
      <li>✏️ Edit</li>
      <li className="danger" onClick={onDelete}>🗑 Delete</li>
    </ul>
  );
}
