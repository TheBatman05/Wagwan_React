import { useEffect, useState } from "react";
import styles from "./Shop.module.css"
import ProductCard from "./Shopcard";

const Shop = () =>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/products/')
        .then(res => res.json())
        .then(response => setProducts(response))
        .catch(err => alert(`failed to fetch products ! ${err}`));
        console.log(products)
    },[]);
    return(
        <div>
            <h1 className={styles.title}>Products</h1>
            {products.map((pro) => (
                <ProductCard key={pro.id} proaks={pro.image} proname={pro.name} proinfo={pro.detail} proprice={pro.price} promojoodi={pro.stock} />
            ))}
        </div>
    );
}
export default Shop;