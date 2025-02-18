import { useState} from "react";

const Counter = ({item}) => {
    const [contador, setContador] = useState(1);

  console.log('peticion fuera del effect');


    const sumar = ()=>{
      if(contador < item.stock){
        setContador(contador + 1)
      }else {
        alert('no hay stock')
      }
    };

    const restar = () =>{
      if(contador > 1){
        setContador(contador -1)
      }else{
        alert('minimo un producto')
      }
    };

    //para saber cuantos productos quedan y cuantos se van a comprar
    const onAdd = () => {
      console.log('agregar al carrito');
/*       console.log(item);
      console.log(contador); */
      let cartObject = {...item, quantity: contador};
      console.log(cartObject);
    };
    
  return (
    <div>
      <div>
        <button onClick={restar}>restar</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>sumar</button>
      </div>
      <button onClick={onAdd}>agregar al carrito</button>
    </div>
  );
};

export default Counter;