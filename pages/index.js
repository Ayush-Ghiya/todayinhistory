import Head from "next/head";

import Link from "next/link";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, { useEffect, useState } from "react";

import styles from "../styles/Home.module.scss";
import Navbar from "../components/navbar/navbar";
import Ticker from "../components/ticker/ticker";
import Footer from "../components/footer/footer";

export default function Home({ resdata }) {
  const [hydrated, setHydrated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState(resdata);

  useEffect(() => {
    setHydrated(true);
    setData(resdata);
  }, []);
  if (!hydrated) {
    return null;
  }
  const handleChange = async (date, e) => {
    console.log(e);
    const res = await fetch(
      `https://history.muffinlabs.com/date/${
        date.getMonth() + 1
      }/${date.getDate()}`
    );
    const resdata = await res.json();
    setData(resdata);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Quick History</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon1.ico"/>
                  

      </Head>
      <Navbar
        startDate={startDate}
        setStartDate={setStartDate}
        handleChange={handleChange}
      />
      <main className={styles.main}>
        <h2 className={`${inter.className} ${styles.headDate}`}>{data.date}</h2>
        <div className={styles.infoDiv}>
          <div className={styles.testing}>
            <h2 className={inter.className}>Events</h2>
            <Link href="/Events">
              <span className={styles.readMore}>Read More</span>
            </Link>
          </div>
          <Ticker messages={data.data.Events} />
          <Ticker messages={data.data.Events} />
          <Ticker messages={data.data.Events} />
          <Ticker messages={data.data.Events} />
          <Ticker messages={data.data.Events} />
        </div>

        <div className={styles.infoDiv}>
          <div className={styles.testing}>
            <h2 className={inter.className}>Births</h2>
            <Link href={"/Births"}>
              <span className={styles.readMore}>Read More</span>
            </Link>
          </div>
          <Ticker messages={data.data.Births} />
          <Ticker messages={data.data.Births} />
          <Ticker messages={data.data.Births} />
          <Ticker messages={data.data.Births} />
          <Ticker messages={data.data.Births} />
        </div>
        <div className={styles.infoDiv}>
          <div className={styles.testing}>
            <h2 className={inter.className}>Deaths</h2>
            <Link href={"/Deaths"}>
              <span className={styles.readMore}>Read More</span>
            </Link>
          </div>
          <Ticker messages={data.data.Deaths} />
          <Ticker messages={data.data.Deaths} />
          <Ticker messages={data.data.Deaths} />
          <Ticker messages={data.data.Deaths} />
          <Ticker messages={data.data.Deaths} />
        </div>
      </main>
      <Footer/>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(`https://history.muffinlabs.com/date`);
  const resdata = await res.json();

  return {
    props: { resdata: JSON.parse(JSON.stringify(resdata)) }, // will be passed to the page component as props
  };
}
