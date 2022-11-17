import { UseContext } from "../../Context/CartContext";

const Cart = ({ item }) => {
  const { removeItem } = UseContext();
  const handleRemove = () => removeItem(item.id)


  return (
        <div className='container'>
    <div class="card" style={{width: "18rem"}}>
    <img src={item?.img} class="card-img-top" alt={item?.name}/> 
    <div class="card-body">
        <h5 class="card-title">{item?.name}</h5>
        <p class={item?.cd}></p>
        <p class={item?.categoria}></p>
    </div>
    <div class="card-body">
        <button onClick={handleRemove} class="card-link">Eliminar</button>
    </div>
    </div>
        </div>
);
};

export default Cart;