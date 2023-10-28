import { RiDeleteBin5Fill } from "react-icons/ri";

const SingleItem = ({ item, remove, editItem }) => {
  return (
    <article className="single-item">
      <input type="checkbox" checked={item.complete} onChange={() => editItem(item.id)} />
      <p style={{ textDecoration: item.complete && "line-through" }}>
        {item.item}
      </p>
      <button className="remove-btn btn" onClick={() => remove(item.id)}>
        delete
      </button>
    </article>
  );
};
export default SingleItem;
