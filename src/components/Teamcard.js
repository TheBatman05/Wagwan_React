import styles from "./Teamcard.module.css"
const Teamcard = (props) => {
    return (
        <div id={styles.container}>
            <div id={styles.profileBox}>
                <img
                    id={styles.profile}
                    src={props.img}
                    alt="picture"
                />
            </div>
            <div id={styles.info}>
                <p id={styles.name}>
                    {props.name}
                </p>
                <p id={styles.roll}>
                    Front-end Developer
                </p>
                <p id={styles.desc}>
                    {props.desc}
                </p>
                <hr id={styles.hr} />
                <div id={styles.skills}>
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>Python</span>
                </div>
            </div>
        </div>
    )
}
export default Teamcard;