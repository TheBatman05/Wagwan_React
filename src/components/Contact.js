import styles from "./Contact.module.css"
import { useState } from "react";

const Contact = () =>{
    const [name, setName] = useState("");
    return(
        <div id={styles.contactbox}>
            <div id={styles.firstbox}><p>Get in touch with our team members.</p><p id={styles.matnkam}>For project orders, React consulting, feedback or contact us.</p></div>
            <div id={styles.contact}>
                <div className={`${styles.box} ${styles.box1}`}> <p id={styles.lastmatn}>Message Form to the Team</p> <div className={styles.inputname}> <label htmlFor="name">Your Name :</label><br /><input type="text" placeholder="Your Name" id="name" className={styles.name} /> <div className={styles.inputmail}> <label htmlFor="mail">Your Mail :</label><br /><input type="Email" placeholder="yourmail@gmail.com" id="mail" className={styles.maile} /> </div></div>
                <div className={styles.inputmeasage}> <label htmlFor="mas">Message Subject :</label><br /><input type="text" placeholder="Collaboration Request or Web Development Order" id="mas" className={styles.mas} /> </div>
                <div className={styles.inputmastext}> <label htmlFor="mastext">Message Text :</label><br /><input type="text" placeholder="Write a brief description of your request or question…" id="mastext" className={styles.mastext} /> </div>
                <button id={styles.butten}>Send Message</button></div>
                <div className={`${styles.box} ${styles.box2}`}> <p className={styles.maillogo}>✉</p><p className={styles.mailmatn}>Group's Direct Email</p> <p className={styles.mail}>wagwanteam@gmail.com <br /> wagwanteamsupport@gmail.com</p></div>
                <div className={`${styles.box} ${styles.box3}`}><p className={styles.maillogo}>♧</p><p className={styles.mailmatn}>Phone Number and Messenger</p> <p className={styles.mail}>+98 917 490 7786 <br /> +98 902 986 6160</p></div>
                <div className={`${styles.box} ${styles.box4}`}><p className={styles.maillogo}>◷</p><p className={styles.mailmatn}>Response Time</p> <p className={styles.mail}>Never</p></div> 
            </div>
            
  
  
            
          
        </div>
    );
}
export default Contact;