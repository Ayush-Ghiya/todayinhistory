import React, {
  useState,
  useEffect,
} from 'react';
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from '../../styles/Ticker.module.scss'


const Ticker = (props) => {
    const { messages } = props;
  
  const [messageIndex, setMessageIndex] = useState(Math.round(Math.random()*messages.length));

  useEffect(() => {
   
    
    let timeout;
    
      timeout = setTimeout(async() => await setMessageIndex(Math.round(Math.random()*messages.length)), 8000);
    

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, messageIndex]);
  return <div className={`${inter.className} ${styles.detailsdiv}`}>
        <span className={styles.detailspan}>{messages[messageIndex]?.year} - </span>
      <p  dangerouslySetInnerHTML={{__html: messages[messageIndex]?.no_year_html}} className={styles.details}></p>
    </div>
}

export default Ticker