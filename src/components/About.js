import styles from "./About.module.css"
import Teamcard from "./Teamcard"
import Strengths from "./Strengths"
const About = () =>{
    return(
        <div id ={styles.container}>
            <span id={styles.about}>About Us!</span>
            <p id={styles.meet}>Meet the People Behind the <span>Code</span></p>
            <p id={styles.smalltxt}>
                We’re a passionate team of developers and designers who turn ideas into thoughtful digital experiences. <br />
                 With creativity, collaboration, and clean code,
                 we build products that are made to stand out and make an impact.
            </p>
            <div id={styles.cardcontainer}>
                <Teamcard
                    img ="./muppet.jpg"
                    name ="Abolfazl Kharazmi"
                    desc ="21-year-old Computer Engineering student & Front-End Developer. 
                    Passionate about JavaScript, 
                    Back-End development, and building modern web experiences."
                />
                <Teamcard
                    img ="./muppet.jpg"
                    name ="Parsa Shabani"
                    desc ="20-year-old Computer Engineering student & Front-End Developer. 
                    Skilled in JavaScript, 
                    with interests in networking, Python, and modern web development."
                />
            </div>
            <p id={styles.btitle}>Our Team Strengths:</p>
            <div id={styles.strng}>
                <div className={styles.txtbox}>
                    <Strengths 
                        title="Clean Code"
                        matn="We focus on writing clean, organized, and maintainable code." 
                        number="1"
                    />
                    <Strengths 
                        title="Creative Thinking"
                        matn="We turn ideas into modern, practical, and engaging digital experiences." 
                        number="2"
                    />
                    <Strengths 
                        title="Fast Learning"
                        matn="We constantly learn new technologies and improve our development skills."
                        number="3" 
                    />
                </div>
                <div className={styles.txtbox}>
                    <Strengths 
                        title="Teamwork"
                        matn="We communicate, share ideas, and work together to build better products." 
                        number="4"
                    />
                    <Strengths 
                        title="Problem Solving"
                        matn="We approach challenges with logical thinking and find effective solutions." 
                        number="5"
                    />
                    <Strengths 
                        title="Attention to Detail"
                        matn="We care about the small details that make our products polished and reliable." 
                        number="6"
                    />
                </div>
            </div>
            <div id={styles.card}>
                    <p>
                        Have an idea for your website? <br />
                        <span id={styles.smalltxt}>Get in touch with our team and let’s turn your idea into a modern,<br /> practical, and engaging digital experience.</span>
                    </p>
                    <button>Get in Touch →</button>
            </div>

        </div>
    );
};
export default About;