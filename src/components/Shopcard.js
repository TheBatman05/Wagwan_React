import styles from "./product.module.css";
import { useState } from "react";

function ProductCard({ proname, proaks, proinfo, proprice, promojoodi }) {
    const [count, setCount] = useState(0);
    return (
        <div className={`${styles.card} ${promojoodi === 0 ? styles.disabled : ""} ${promojoodi === 0 ? styles.disabled : ""}`}>

            <span className={styles.stock}>
                <span className={styles.span}>●</span>
                {promojoodi > 0 ? " In Stock" : " Out of Stock"}
            </span>
            <div className={styles.image}>
                <img src={proaks} alt={proname} />
            </div>
            <h2>{proname}</h2>
            <p className={styles.info}>{proinfo}</p>
            <h3 className={styles.price}>
                {proprice} $
            </h3>
            <hr />
            <div className={styles.bottom}>
                <button
                        className={`${styles.buy} ${count >= 1 ? styles.disabled2 : ""}`}
                        onClick={() => {
                            if (promojoodi > 0) {
                                setCount(1);
                            }}}
                    >
                        Buy
                    </button>
                <div className={styles.buttons}>
                    <button
                        onClick={() => {
                            if (count > 0) {
                                setCount(count - 1);
                            }
                        }}
                    >
                        -
                    </button>
                    <span>{count}</span>
                    <button
                        onClick={() => {
                            if (count < promojoodi) {
                                setCount(count + 1);
                            }
                        }}
                    >
                        +
                    </button>
                </div>
                <p className={styles.remaining}>
                    {promojoodi - count} remaining
                </p>
            </div>
        </div>
    );
}
export default ProductCard;