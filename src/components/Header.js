import styles from "./Header.module.css"
// import muppet from "../../public/muppet.jpg"
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div id={styles.header}>
            <div id={styles.container}>
                <img src="muppet.jpg" alt="group-picture" id={styles.img} />
                <p id={styles.name}>Wagwan Team</p>
                <ul>
                    <li className={styles.item}><Link to="/"><button>Home</button></Link></li>
                    <li className={styles.item}><button>Shop</button></li>
                    <li className={styles.item}><button>Contact</button></li>
                    <li className={styles.item}> <Link to="/About"> <button>About</button></Link></li>
                    <li className={styles.item}><button>Learning</button></li>
                    <li className={styles.item}><Link to="/Services"><button>Services</button></Link></li>
                </ul>
                <p id={styles.coding}>
                    Coding
                    <span> </span> 
                    <span id={styles.a}>  .</span>
                    <span id={styles.b}>.</span>
                    <span id={styles.c}>.</span>
                </p>
            </div>
        </div>
    );
}
export default Header;