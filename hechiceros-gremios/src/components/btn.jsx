import {React} from "react";
import styles from "./btn.module.css"

const Button = ({name, count, setCount}) => {
  return(
    <div 
      onClick={() => {
      setCount((count = count *2));
      }}
>
      <p> {name}</p>
    </div>
  );
};
export default Button;