import styles from "./Strengths.module.css"
const Strengths =(props)=>{
    return(
        <div id={styles.container}>
            <p>{props.title}</p>
            <p id={styles.smalltxt}>{props.matn}</p>

        </div>
    );
};
export default Strengths;