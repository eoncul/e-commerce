import React, { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
 const{ addToBasket}= useContext (BasketContext);
  const navigate=useNavigate();

  return (
    <div className="card py-2"
     style={{ width: "250px" }}>
      <div  className="d-flex justify-content-center">
        <img onClick={()=> navigate(`/products/${product.id}`)} className="object-fit" height={120} src={product.image} />
      </div>
      <div className="card-body d-flex flex-column gap-1">
        <div onClick={()=> navigate(`/products/${product.id}`)}>
        <h4 className="text-truncate">{product.title}</h4> 
        {/* .slice(0,30) */}
        <p>{product.price}</p>
        <p>{product.category}</p>
        </div>
        <div>
        <button className="bg-dark" onClick={()=> addToBasket(product)}  >Sepete Ekle</button>
      </div>
      </div>
    </div>
  );
};

export default Card;
