import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useSignUp() {
  const navigate = useNavigate();
  const serverUrl = process.env.REACT_APP_SERVER
  
  const signup = async () => {
    if(cookie.get("token")){
      navigate("/myfiles")
    } else {
      const response = await fetch(`${serverUrl}/api/signup`, {
        method: "POST"
      })
      let data = await response.json();
      
      if(data.success === "true") {
        cookie.set("token", data.token, {
          expires: 1
        })
        
        navigate("/myfiles");
      } else {
        toast.error("Something Went Wrong")
      }
    }
  }
  
  return signup ;
}