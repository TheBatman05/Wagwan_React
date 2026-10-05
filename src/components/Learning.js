import styles from "./Laerning.module.css"
import { useState } from "react";

const Laerning = () =>{
    const [selectedTrick, setSelectedTrick] = useState(1);
    return(
       <div id={styles.trickspage}>
        {/* <div id={styles.firstbox}>React Tutorial and Roadmap</div> */}
        <span id={styles.about}>Learning</span>
        {/* <p id={styles.matntricks}>Where should we start learning React?</p> */}
        <p id={styles.title}>Where should we start learning <span>React</span>?</p>
        <p id={styles.smalltxt}>
                Our team's hands-on guide for those who want to enter the amazing world of React from zero, without confusion.
        </p>
        {/* <hr id={styles.hr} /> */}
        {/* <div className={styles.numberbox}>1</div> */}
        <div className={styles.container}>
            <div id={styles.timeline}></div>
            <div className={styles.numberbox}>1</div>
            <div className={styles.tricksbox}>
                <h2 className={styles.matnbox}>JavaScript Prerequisites (ES6+)</h2>
                <p className={styles.matnbox2}>Before learning React, you must master concepts like Arrow Functions, Destructuring, Spread Operator, Array Methods (map, filter, reduce) and Promises.</p>
                
            </div>
            <div className={`${styles.numberbox} ${styles.box2}`}>2 </div>
            <div className={`${styles.tricksbox} ${styles.matnbox3}`}>
                <h2 className={styles.matnbox}>Getting familiar with JSX and components</h2>
                <p className={styles.matnbox2}>Understanding how to combine JavaScript logic with HTML-like markup. Understanding functional components and passing data via Props.</p>
                
            </div>
            <div className={`${styles.numberbox} ${styles.box3}`}>3 </div>
            <div className={`${styles.tricksbox} ${styles.matnbox4}`}>
                <h2 className={styles.matnbox}>Managing state with useState and lifecycle with useEffect</h2>
                <p className={styles.matnbox2}>Learning the beating heart of React: local component state, re-rendering, and managing side effects like network requests with hooks.</p>
                
            </div>
            <div className={`${styles.numberbox} ${styles.box4}`}>4</div>
            <div className={`${styles.tricksbox} ${styles.matnbox5}`}>
                <h2 className={styles.matnbox}>Routing and Form Management</h2>
                <p className={styles.matnbox2}>Working with multi-page structures (SPA Routing), controlling inputs (Controlled Components) and form validation.</p>
                
            </div>
            <div className={`${styles.numberbox} ${styles.box5}`}>5</div>
            <div className={`${styles.tricksbox} ${styles.matnbox6}`}>
                <h2 className={styles.matnbox}>Global State Management (Context & Zustand)</h2>
                <p className={styles.matnbox2}>Preventing Prop Drilling and storing shared data like the shopping cart, logged-in user status, and app theme across the entire project.</p>
                
            </div>
            <p id={styles.realproject}>Practical React tricks in real-world projects</p>
            
            
        </div>
       <div id={styles.containeramoozesh}> <p id={styles.real}>Practical React tricks in real-world projects</p>
        <p id={styles.realproject}>Techniques that help make your application cleaner and faster.</p>
        <div id={styles.bbcontainer}>
            <div tabIndex={0} className={`${styles.bigbox} ${styles.shomare1}`} onClick={() => setSelectedTrick(1)}> <p className={styles.amoozesh}>Trick 1: Optimizing Renders with useMemo and useCallback</p><p className={styles.amoozesh2}>Avoid recalculating heavy functions on every render with the useMemo hook, and keep function references stable with useCallback.</p></div>
            <div tabIndex={0} className={`${styles.bigbox} ${styles.shomare1}`} onClick={() => setSelectedTrick(2)}> <p className={styles.amoozesh}>Trick 2: Creating a Custom Hook</p><p className={styles.amoozesh2}>Encapsulate shared logic between multiple components, like page dimensions, data fetching, or form management, in an independent hook.</p></div>
            <div tabIndex={0} className={`${styles.bigbox} ${styles.shomare1}`}onClick={() => setSelectedTrick(3)}> <p className={styles.amoozesh}>Trick 3: Cleaning Up Side Effects in useEffect</p><p className={styles.amoozesh2}>Always clean up event listeners, timers, and WebSocket connections in the return function of the useEffect hook to prevent memory leaks.</p></div>
       </div>
       </div>
       <div id={styles.lastbox}>
        <div className={`${styles.rangbox} ${styles.red}`}></div>
        <div className={`${styles.rangbox} ${styles.green}`}></div>
        <div className={`${styles.rangbox} ${styles.yellow}`}></div>
        <p id={styles.samplematn}>Sample code</p>
        <hr id={styles.hr2}/>
        <p id={styles.lastp}>
            {/* {`import { useState } from 'react';

            export default function LikeButton() {
            const [likes, setLikes] = useState(0);

            return (
                <button onClick={() => setLikes(likes + 1)}>
                ❤️ {likes} لایک
                </button>);}`} */}
            {selectedTrick === 1 && `const result = useMemo(
  () => expensiveCalculation(data),
  [data]
);

const handleClick = useCallback(
  () => selectItem(id),
  [id]
);`}
            {selectedTrick === 2 && `function useToggle() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return [open, toggle];
}`}
            {selectedTrick === 3 && `useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);`}
        </p>
       </div>
       </div>

    );
}
export default Laerning;