import { useState } from "react";
import styles from "../styles/SupportForm.module.css";
import Button from "./Button";
import useSupport from "../hooks/useSupport";

export default function SupportForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  
  const { loading, submitSupport } = useSupport();
  
  const handler = async () => {
    await submitSupport({
      name,
      email,
      description
    })
    
    setName("");
    setEmail("");
    setDescription("")
  }
  
  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <p>If you have any problem or suggestion please fill the form below and submit. We will contact you shotly.</p>
        </div>
        
        <div className={styles.inputDiv}>
          <p>Name</p>
          <input 
            type="text" 
            value={name} 
            onChange={(e)=>setName(e.target.value)} 
            placeholder="Your Name" />
        </div>
        
        <div className={styles.inputDiv}>
          <p>Email</p>
          <input 
            type="email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            placeholder="Your Email" />
        </div>
        
        <div className={styles.inputDiv}>
          <p>Description</p>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows={12}
          />
        </div>
        
        <Button 
          loading={loading}
          text="Submit"
          handler={handler}
          divClass="utilityBtn"
          style={{margin: "16px auto 0 auto"}}
        />
      </div>
    </div>
    )
}