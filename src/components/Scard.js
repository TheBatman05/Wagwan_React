import styles from "./Scard.module.css"
const Scard=(props)=>{
    return(
        <div id={styles.container}>
            <div id={styles.num}><span>{props.number}</span></div>
            <p id={styles.ctitle}>{props.title}</p>
            <p id={styles.smalltxt}>{props.desc}</p>
            <ul>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
            </ul>
            <div id={styles.sub}>
                Get Started
            </div>
        </div>
    );
};
export default Scard;