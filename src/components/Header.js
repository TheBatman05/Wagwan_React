import styles from "./Header.module.css"
// import muppet from "../../public/muppet.jpg"
const Header = () =>{
    return(
        <div id={styles.header}>
            <div id={styles.container}>
                <img src="muppet.jpg" alt="group-picture" id={styles.img} />
                <p id={styles.name}>Wagwan Team</p>
                <ul>
                    <li className={styles.item}><button>Home</button></li>
                    <li className={styles.item}><button>Shop</button></li>
                    <li className={styles.item}><button>Contact</button></li>
                    <li className={styles.item}><button>about</button></li>
                    <li className={styles.item}><button>Learning</button></li>
                    <li className={styles.item}><button>Why us?</button></li>
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