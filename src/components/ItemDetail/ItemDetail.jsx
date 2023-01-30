import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({product}) => {
  return (
    
    <div width="200" className="product">
        <img src={product.image} alt={product.title} width="200" />
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
        <h3>{product.category}</h3>
        <h3>{product.description}</h3>
        <ItemCount/>
    </div>
    
  )
}

export default ItemDetail;