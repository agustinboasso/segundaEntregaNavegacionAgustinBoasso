import ItemCount from "../../components/ItemCount/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();
  
 

   const getProducts = fetch ('https://fakestoreapi.com/products',{
    method: 'GET',
   
    }); 
   

   

  useEffect(()=> {
    getProducts
      .then((res)=> {
        return res.json();
      })
      .then((response) => {
       setProducts(response);
      })
      .catch(error => console.log(error))
  },[]);

  useEffect(()=>{
    if(category){
    const removeCharacters = category?.includes('%20') ? category.replace('%20', ' ') : category;
    const filterProducts = products.filter
    ((product) => product.category === removeCharacters );
    setFilteredProducts(filterProducts);
    }
  }, [category])
 

  

  return (
    <div>
        {greeting}
        
        <ItemList productos = {category ? filteredProducts : products}/>
        
       
       
    </div>
  )
};

export default ItemListContainer;