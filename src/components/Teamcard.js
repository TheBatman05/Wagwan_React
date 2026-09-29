import styles from "./Teamcard.module.css"
const Teamcard = (props)=>{
    return(
        <div id={styles.container}>
            <img id={styles.profile} src={props.img} alt="picture" />
            <p id={styles.name}>{props.name}</p>
            <p id={styles.roll}>Front-end Developer</p>
            <p id={styles.desc}>{props.desc}</p>
                <hr id={styles.hr} />
                <div id={styles.skills}>
                     <div>
                        <span>Front-end</span>
                        <span>React</span>
                        <span>JavaScript</span>
                    </div>
                        <br />
                    <div id={styles.asdf}>
                        <span>CSS</span>
                        <span>Python</span>
                    </div>
                </div>
        </div>
    );
};
export default Teamcard;