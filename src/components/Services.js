import styles from "./Services.module.css";
import Scard from "./Scard";
import { Link } from "react-router-dom";

const Services = ()=>{
    return(
        <div id={styles.container}>
            <span id={styles.about}>Services</span>
            <p id={styles.title}><span>Services</span> We Offer</p>
            <p id={styles.smalltxt}>
                Explore the services 
                we provide to turn your ideas into modern, 
                functional, and engaging digital experiences.
            </p>
            <div className={styles.txtbox}>
                <Scard
                    number="1"
                    title="Web Application Development"
                    desc="We build modern, fast, and scalable web applications using React and Next.js."
                    li1="Responsive and mobile-friendly interfaces"
                    li2="Reusable and maintainable React components"
                    li3="Fast and scalable Next.js applications"
                />
                <Scard
                    number="2"
                    title="UI/UX & Web Design"
                    desc="We create clean, intuitive, and engaging designs focused on great user experiences."
                    li1="Modern and visually appealing interfaces"
                    li2="User-friendly layouts and navigation"
                    li3="Consistent design systems and components"
                />
            </div>
            <div className={styles.txtbox}>
                <Scard
                    number="3"
                    title="API & Real-Time Integration"
                    desc="We connect applications to APIs and real-time services to deliver dynamic and interactive experiences."
                    li1="REST API integration and data handling"
                    li2="Real-time data and service connections"
                    li3="Reliable communication between frontend and backend"
                />
                <Scard
                    number="4"
                    title="Optimization & SEO"
                    desc="We optimize websites for better performance, accessibility, and search engine visibility."
                    li1="Faster loading and optimized performance"
                    li2="SEO-friendly structure and content"
                    li3="Improved accessibility and user experience"
                />
            </div>
            <div id={styles.card}>
                    <p>
                        Have a Different Project in Mind? <br />
                        <span id={styles.smalltxt}>Share the specific details of your project with us,<br /> and we’ll get back to you as soon as possible to discuss your needs.</span>
                    </p>
                    <Link to="/Contact"><button><span id={styles.text}>Request a Quote</span><span id={styles.arrow}> →</span></button></Link>
            </div>
        </div>
    );
};
export default Services;