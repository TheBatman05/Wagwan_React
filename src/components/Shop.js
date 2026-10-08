import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import ProductCard from "./Shopcard";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://api.amiranco.net/api/products")
            .then(res => res.json())
            .then(response => {
                setProducts(response);
                setLoading(false);
            })
            .catch(err => {
                alert(`failed to fetch products ! ${err}`);
                setLoading(false);
            });
        console.log(products);
    }, []);
    if (loading) {
    return (
        <div className={styles.loading}>
            <p>Loading...</p>
        </div>
    );
}
    return (
        <>
            <span id={styles.about}>Shop</span>
            <div id={styles.container}>
                {products.map((pro) => (
                    <ProductCard
                        key={pro.id}
                        proaks={pro.image}
                        proname={pro.name}
                        proinfo={pro.detail}
                        proprice={pro.price}
                        promojoodi={pro.stock}
                    />
                ))}
            </div>
        </>
    );
};
export default Shop;