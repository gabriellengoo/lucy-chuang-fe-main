import styles from "../../styles/Post.module.css";
import Head from "next/head";
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import Router from "next/router";
import HorizontalCarousel from "../../components/HorizontalCarousel";

export const Post = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Made In Britain</title>
        <meta name="description" content="Lucy Chuang portfolio" />
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
      <header className={styles.header}>
        <div className={styles.tlabel}>
          <div className={styles.headeredition}>
            <a href="../" data-location="internal">
              2022 LUCY CHUANG
            </a>
          </div>
          <div className={styles.headertime}>06:20:22</div>
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
  );
};

export default Post;
