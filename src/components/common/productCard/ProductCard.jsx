import { Button } from "@mui/material";
import { Link } from "react-router";
import "./productCard.css";

const ProductCard = ({ price, title, stock, id, imageUrl }) => {
  return (
    <div className="gothic-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="product-image" />
        <div className="image-overlay" />
      </div>

      <h2 className="product-title">{title}</h2>
      <h2 className="product-price">${price}</h2>
      <h2 className={`product-stock ${stock <= 5 ? "low-stock" : ""}`}>
        {stock > 0 ? `${stock} disponibles` : "Agotado"}
      </h2>

      <Link to={`/itemDetail/${id}`} className="product-link">
        <Button
          variant="outlined"
          sx={{
            borderColor: "green", // Cambia el borde a verde
            color: "green", // Cambia el color del texto a verde (opcional)
          }}
        >
          Ver detalle
        </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
