import SingleItem from "./SingleItem"

const Items = ({items, remove, editItem}) => {
  return (
      <div className="items">
          {items.map((item) => {
         return <SingleItem key={item.id} item={item} remove={remove} editItem={editItem} />
          })}
    </div>
  )
}
export default Items