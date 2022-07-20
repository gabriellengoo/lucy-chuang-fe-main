import styles from "../../styles/Post.module.css";
import Head from "next/head";
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import Router from "next/router";
import HorizontalCarousel from "../../components/HorizontalCarousel";
import HorizontalCarouselmobile from "../../components/HorizontalCarouselmoblie";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export const Post = () => {

  const router = useRouter();
  const [isLoaded, setisLoaded] = useState(false);
  const [mappedPosts, setMappedPosts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true); 
    }, 6000);
  }, []);


  return (
    <div>
      <Head>
        <title>Made In Britain</title>
        <meta name="description" content="Xinyu Chuang portfolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <link rel="icon" href="https://i.ibb.co/9T4ft5j/logo.png" /> */}
        <link rel="icon" href="/favicon.ico" />
        <script
          src="http://owlcarousel.owlgraphic.com/assets/vendors/jquery.mousewheel.min.js"
          defer
        ></script>
        <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"
          defer
        ></script>
        {/* <script src=" https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineMax.min.js" defer></script> */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"
          defer
        ></script>

        <script
          src="https://codepen.io/GreenSock/pen/7ba936b34824fefdccfe2c6d9f0b740b.css"
          defer
        ></script>
        <script src="https://unpkg.co/gsap@3/dist/gsap.min.js" defer></script>
        <script
          src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js"
          defer
        ></script>
        <script
          src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"
          type="text/javascript"
          defer
        ></script>

        <script src="../../assets/app.js" defer></script>
      </Head>
 {isLoaded ? (
        <>


      <BrowserView> 
         <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.tlabel}>
          <div className={styles.headeredition}>
            <a href="../" data-location="internal">
              2022 Xinyu CHUANG
            </a>
          </div>
          <div>__</div>
                {/* <div className={styles.headertime}> 06:20:22</div> */}
                <div className={styles.headertime}>
                  <div></div>
                        <div id="Date"></div>
                      <ul className={styles.ul}>
                          <li id="hours"></li>
                          <li id="point">:</li>
                          <li id="min"></li>
                          <li id="point">:</li>
                          <li id="sec"></li>
                      </ul>
                    <div></div>
                </div>
          <div id="header-customer">
            <a
              href="https://www.instagram.com/is_this_gabrielle/"
              data-location="internal"
            >
              © Created by the Internet Arcitect
            </a>
          </div>
        </div>
      </header>
      <div className={styles.text}>
        <h1 className={styles.titleback}>
          <div onClick={() => Router.back()}> ← Back</div>
        </h1>
      </div>



      {/* ----------------------------------------------------- here are the images   -----------------------------------------------------  */}
      <HorizontalCarousel />

      </div>
      </BrowserView> 






      <MobileView>  
      <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.tlabel}>
          <div className={styles.headeredition}>
            <a href="../" data-location="internal">
              2022 Xinyu CHUANG
            </a>

          </div>
          <div>__</div>
                {/* <div className={styles.headertime}> 06:20:22</div> */}
                <div className={styles.headertime}>
                  <div></div>
                        <div id="Date"></div>
                      <ul className={styles.ul}>
                          <li id="hours"></li>
                          <li id="point">:</li>
                          <li id="min"></li>
                          <li id="point">:</li>
                          <li id="sec"></li>
                      </ul>
                    <div></div>
                </div>
          <div id="header-customer">
            <a
              href="https://www.instagram.com/is_this_gabrielle/"
              data-location="internal"
            >
              © Created by the Internet Arcitect
            </a>
          </div>
        </div>
      </header>
      <div className={styles.text}>
        <h1 className={styles.titleback}>
          <div onClick={() => Router.back()}> ← Back</div>
        </h1>
      </div>



      {/* ----------------------------------------------------- here are the images   -----------------------------------------------------  */}
      <HorizontalCarousel />

      </div>
      </MobileView>
   
      </>
      ) : (
        <div className="w-screen h-screen bg-black flex justify-center items-center">
          <Image
            src="/images/mrbean.gif"
            width={270}
            height={180}
            alt="Mrbean GIF - Loading fallback"
          />
        </div>
      )}

    </div>
  );
};

export default Post;
