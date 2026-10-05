import styles from "./product.module.css" 
import { useState } from "react";




const ProductCard = ({proname, proaks , proinfo, proprice, promojoodi}) => {
    const [count, setCount] = useState(0); 
    return (
        <div className={styles.khar}>
        <div className={`${styles.shopcard} ${promojoodi == 0 ? styles.disabled : ""}`}>
            <h1 id={styles.name}>{proname}</h1>
            <div className={styles.aks}><img className={styles.aks2} src={proaks} alt="" /></div>
            <p id={styles.details}>details : {proinfo}</p>
            <span id={styles.span}>﷼ {proprice}</span>
            <hr id={styles.hr} />
            <div className={styles.countBox}>
                <button className={styles.btn} onClick={() => {
                    if (count >= 1) {
                        setCount(count - 1);
                    }
                }}>-</button>
                <span> {count} </span>
                <button  className={styles.btn} onClick={() => {
                    if (count+1 > promojoodi) {
                        alert("You can not take more than stock")
                    } else {
                        setCount(count + 1);
                    }
                }}>+</button>
                
            </div>
            <p className={styles.promojoodi}>{promojoodi - count} Remained</p>
        </div></div>
       
    );
}
export default ProductCard;