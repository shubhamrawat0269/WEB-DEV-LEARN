export default function ContextMenu({ x, y, onDelete, onEdit }) {
  return (
    <ul className="context-menu" style={{ top: y, left: x }}>
      <li onClick={onEdit}>✏️ Edit</li>
      <li className="danger" onClick={onDelete}>🗑 Delete</li>
    </ul>
  );
}
