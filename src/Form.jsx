import { useState } from "react";
import {toast} from 'react-toastify'

const Form = ({addItem}) => {
  const [newItem, setNewItem] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
      if (!newItem) {
          toast.error('please add an item')
            return
        }
        addItem(newItem)
        setNewItem('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          value={newItem}
          className="form-input"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </div>
    </form>
  );
};
export default Form;
