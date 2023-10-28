import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import{ToastContainer, toast} from "react-toastify"

const App = () => {
    const defaultList = () => {
      return JSON.parse(localStorage.getItem("list")) || [];
    };
  const [items, setItems] = useState(defaultList());
  // setup local storage
  const setLocalStorage = (item) => {
    return localStorage.setItem('list', JSON.stringify(item))
  }
  // fetch item from local storage 

  // add item into the list
  const addItem = (item) => {
    const newItem = {
      complete:false,
      id: nanoid(),
      item,
    };
const newItems = [...items,newItem]
    setItems(newItems);
    setLocalStorage(newItems)
    toast.success('item added to the list')
  };

  // delete a particular item from the list
  const remove = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
    setLocalStorage(newItems)
        toast.success("item deleted from the list");

  };
  // set item to complete
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, complete: !item.complete }
        return newItem
      } 
      return item
   
    })
      setItems(newItems);
      setLocalStorage(newItems);
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center"/>
      <Form addItem={addItem} />
      <Items items={items} remove={remove} editItem={editItem} />
    </section>
  );
};

export default App;
