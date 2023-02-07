
import "../styles/globals.css";
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(40);
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100);
    })
  
    
  }, [])

  return (
    <>
      <LoadingBar
  color='#f77417'
  progress={progress}
  waitingTime={400}
  onLoaderFinished={() => setProgress(0)}
/>
      <Component {...pageProps} />
    </>
  );
}
