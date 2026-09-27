import styles from "./Footer.module.css"

const Footer = () =>{
    return(
        <div id={styles.footerbox}>
          <p id={styles.matnfooter}><span id={styles.grad}>⟨ ⟩</span> wagwan team website</p>
          <br />
          <hr />
          <p id={styles.asatid}>Created with ♥️ by : <a href="https://github.com/parsashabani"><span className={styles.salatin}>Parsa.Shabani</span></a> & <a href="https://github.com/TheBatman05"><span className={styles.salatin} >A.Kharazmi</span></a></p>
          <div id={styles.tashakor}><p id={styles.sepas}>Thank you for visiting our website.</p></div>
        </div>
    );
}
export default Footer;