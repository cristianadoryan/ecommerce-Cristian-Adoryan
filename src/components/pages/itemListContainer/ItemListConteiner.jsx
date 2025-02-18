import { useParams } from "react-router";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";



const ItemListConteiner = () => {

    const {name} = useParams();
    
    const [Items, setItems] = useState([]);

    useEffect(() => {
        let arrayFiltrado = products.filter((elemento)=>elemento.category===name);
        const getProducts =  new Promise((resolve, reject) => {
            let permiso = true;
            if(permiso){
                resolve(name ? arrayFiltrado : products);
            } else {
                reject({status:404, message:"no se encontraron productos"});
            }
        });

        getProducts
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [name]);

    return (
        <div>
            {Items.map((item)=>{
                return (
                    <ProductCard
                    key={item.id}
                    price={item.price}
                    title={item.title}
                    stock={item.stock}
                    imageUrl={item.imageUrl}
                    id={item.id}
                    description={item.descripcion}
                    category={item.category}
                    />
                );
            })}
        </div>
    );
};
//lel caso anterior es poco practico lo mejor es usar la desescructuracion directamente en la variable item dentro del map poniendo ({id, title, price})etc. o usar un spread operator dejando solo la key y 
//luego ({...item})
export default ItemListConteiner;