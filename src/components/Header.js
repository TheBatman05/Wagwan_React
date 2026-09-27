import styles from "./Header.module.css"
// import muppet from "../../public/muppet.jpg"
const Header = () =>{
    return(
        <div id={styles.container}>
            <img src="muppet.jpg" alt="group-picture" id={styles.img} />
            <p>Wagwan Team</p>
            <ul>
                <li className={styles.item}><button>Home</button></li>
                <li className={styles.item}><button>Shop</button></li>
                <li className={styles.item}><button>Contact</button></li>
                <li className={styles.item}><button>about</button></li>
                <li className={styles.item}><button>Tricks</button></li>
                <li className={styles.item}><button>Why us?</button></li>
            </ul>
        </div>
    );
}
export default Header;