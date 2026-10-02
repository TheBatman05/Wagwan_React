import styles from "./Strengths.module.css"
const Strengths = (props) => {
    return (
        <div id={styles.container}>
            <span id={styles.number}>
                {props.number}
            </span>
            <div id={styles.line}></div>
            <p id={styles.title}>
                {props.title}
            </p>
            <p id={styles.smalltxt}>
                {props.matn}
            </p>
        </div>
    );
};
export default Strengths;