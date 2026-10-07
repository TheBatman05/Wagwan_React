import styles from "./Header.module.css"
// import muppet from "../../public/muppet.jpg"
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div id={styles.header}>
            <div id={styles.container}>
                <div id={styles.brand}>
                    {/* <img src="/muppet.jpg" alt="group-picture" id={styles.img} /> */}
                    <img
    src={`${process.env.PUBLIC_URL}/muppet.jpg`}
    alt="group-picture"
    id={styles.img}
/>
                    <p id={styles.name}>Wagwan Team</p>
                </div>
                {/* <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
                    <li className={styles.item}><Link to="/" onClick={() => setMenuOpen(false)}><button>Home</button></Link></li>
                    <li className={styles.item}><Link to="/Shop"><button>Shop</button></Link></li>
                    <li className={styles.item}><Link to="/Contact" onClick={() => setMenuOpen(false)}><button>Contact</button></Link></li>
                    <li className={styles.item}><Link to="/About" onClick={() => setMenuOpen(false)}> <button>About</button></Link></li>
                    <li className={styles.item}><Link to="/Learning" onClick={() => setMenuOpen(false)}><button>Learning</button></Link></li>
                    <li className={styles.item}><Link to="/Services" onClick={() => setMenuOpen(false)}><button>Services</button></Link></li>
                </ul> */}
                <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
                    <li className={styles.item}>
                        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                            {({ isActive }) => (
                                <button className={isActive ? styles.active : ""}>
                                    Home
                                </button>
                            )}
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/Shop" onClick={() => setMenuOpen(false)}>
                            {({ isActive }) => (
                                <button className={isActive ? styles.active : ""}>
                                    Shop
                                </button>
                            )}
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/Contact" onClick={() => setMenuOpen(false)}>
                            {({ isActive }) => (
                                <button className={isActive ? styles.active : ""}>
                                    Contact
                                </button>
                            )}
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/About" onClick={() => setMenuOpen(false)}>
                            {({ isActive }) => (
                                <button className={isActive ? styles.active : ""}>
                                    About
                                </button>
                            )}
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/Learning" onClick={() => setMenuOpen(false)}>
                            {({ isActive }) => (
                                <button className={isActive ? styles.active : ""}>
                                    Learning
                                </button>
                            )}
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/Services" onClick={() => setMenuOpen(false)}>
                            {({ isActive }) => (
                                <button className={isActive ? styles.active : ""}>
                                    Services
                                </button>
                            )}
                        </NavLink>
                    </li>
                </ul>
                <p id={styles.coding}>
                    Coding
                    <span> </span> 
                    <span id={styles.a}>  .</span>
                    <span id={styles.b}>.</span>
                    <span id={styles.c}>.</span>
                </p>
                <button id={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </div>
        </div>
    );
}
export default Header;