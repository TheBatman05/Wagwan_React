import styles from "./Hero.module.css"
const Hero = () =>{
    return(
            <div id={styles.container}>
                <p id={styles.maintxt}>
                    Your <span id={styles.idea}>Ideas.</span> <br />
                    Our <span id={styles.code}>Code.</span> <br />
                    Better <span id={styles.exp}>Experiences.</span>
                </p>
                <p id={styles.smalltxt}>
                    From ideas to interfaces, 
                    we build experiences that make a difference.
                </p>
                <div id={styles.btncontainer}>
                    <button className={styles.btn} id={styles.services}>
                        Our Services →
                    </button>
                    <button className={styles.btn} id={styles.us}>
                        About Us!
                    </button>
                </div>
                <div id={styles.card}>
                    <p>
                        Want to learn React and Front-End development? <br />
                        <span id={styles.smalltxt}>Click below and start your journey with our practical tutorials.</span>
                    </p>
                    <button>Enter learning page</button>
                </div>
            </div>
    );
}
export default Hero;