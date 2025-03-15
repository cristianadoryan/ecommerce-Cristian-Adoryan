import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    telefono: "",
    // talle:"",
  });

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    setIsLoading(true);

    let total = getTotalAmount();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let refCollection = collection(db, "orders");
    const promiseResponse = addDoc(refCollection, order);
    promiseResponse.then((res) => {
      setOrderId(res.id);
      resetCart();
      setIsLoading(false);
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((item) => {
      let productRef = doc(productsCollection, item.id);
      updateDoc(productRef, { stock: item.stock - item.quantity });
    });
  };

  const handleChange = (evento) => {
    const { value, name } = evento.target;
    setUser({ ...user, [name]: value });
  };

  // const arrayTalles = [
  //     {label: "talle 1", value: "1"},
  //     {label: "talle 2", value: "2"},
  //     {label: "talle 3", value: "3"},
  // ];

  return (
    <div>
      {orderId ? (
        <h2>gracias por tu compra tu id es {orderId}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nombre"
            name="nombre"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="telefono"
            name="telefono"
            onChange={handleChange}
          />

          {/* <select name="talle" onChange={handleChange}>
              {arrayTalles.map((talle) => {
                return (
                  <option
                    key={talle.value}
                    value={talle.value}
                    label={talle.value}
                  />
                );
              })}
            </select> */}

          <button disabled={isLoading}>comprar</button>
          <button type="submit">cancelar</button>
        </form>
      )}
      {isLoading && <h2>Cargando...</h2>}
    </div>
  );
};

export default Checkout;
