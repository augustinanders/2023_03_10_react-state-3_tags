import "./List.css";

export default function List({ tags, onRemoveTag }) {
  return (
    <>
      <h2>Your Tags:</h2>
      <ul className="tag-list">
        {(tags ?? []).map((tag, index) => (
          <li key={index} className="tag-list__item">
            <h3>{tag}</h3>
            <button
              className="tag-list__item-button"
              type="button"
              aria-label="delete list item"
              onClick={() => onRemoveTag?.(tag)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
