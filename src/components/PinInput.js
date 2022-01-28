import { useState, useRef } from "react";
import styles from "../styles/PinInput.module.css";
import LoadingSpiner from "./LoadingSpiner";
import { BiSearchAlt } from "react-icons/bi";

export default function PinInput() {
  const [pin, setPin] = useState(null);
  const [error, setError] = useState(" ");
  const boxRef = useRef();
  
  const showError = () => {
    console.log(boxRef.current.classList)
    boxRef.current.classList.add(styles.error);
    boxRef.current.classList.add(styles.errorAnimate);
    
    setTimeout(function() {
      boxRef.current.classList.remove(styles.errorAnimate)
    }, 350);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    showError()
    setError("Error occured")
  }
  
  return (
    <div className={styles.inputWrapper}>
      <form ref={boxRef} className={styles.inputBox} onSubmit={handleSubmit}>
       <input type="number" placeholder="Enter PIN" name="pin" value={pin} onChange={(e) => setPin(e.target.value)} />
      {true ? (<button type="submit">
         <BiSearchAlt style={{ verticalAlign: 'middle' }} />
       </button>) :
       (<div className={`${styles.spinerContainer} center`}>
         <div 
           className="center" 
           style={{padding: "0 12px 0 4px"}}
         >
           <LoadingSpiner stroke="#e15b64" />
         </div>
       </div>)}
      </form>
      <div className={styles.errorInfo}>
      {error}</div>
    </div>
    )
}