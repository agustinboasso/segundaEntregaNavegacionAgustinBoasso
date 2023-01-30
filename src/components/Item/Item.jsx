import './Item.css';

const Item = ({producto}) => {
  return (
    <li key={producto.id} width="200" className="product" >
        <img src={producto.image} alt={producto.title} />
        <h2>{producto.title}</h2>
        <h3>{producto.category}</h3>
        <h3>{producto.description}</h3>
    </li>
  );
};

export default Item;