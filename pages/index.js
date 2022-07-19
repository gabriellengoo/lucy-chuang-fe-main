import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { NextScript } from "next/document";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Marquee from "react-fast-marquee";
import Link from "next/link";
// import Carousel from 'react-spring-3d-carousel';
// firsttwo
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { browserName, CustomView } from "react-device-detect";



export default function Home({ posts }) {
  const router = useRouter();
  const [isLoaded, setisLoaded] = useState(false);
  const [mappedPosts, setMappedPosts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "wie5l8nw",
        dataset: "production",
      });

      console.log(posts);

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImagefirsttwo: imgBuilder.image(p.mainImagefirsttwo),
            // mainImagesecondtwo: imgBuilder.image(p.mainImagesecondtwo),
            // mainImage3: imgBuilder.image(p. mainImage3),
            // mainImage4: imgBuilder.image(p. mainImage4),
            // mainImage5: imgBuilder.image(p. mainImage5),
            // mainImage6: imgBuilder.image(p. mainImage6),
            // mainImage7: imgBuilder.image(p. mainImage7),
            // mainImage8: imgBuilder.image(p. mainImage8),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Xinyu Chuang</title>
        <meta name="description" content="Xinyu Chuang" />
        {/* <link rel="icon" href="https://i.ibb.co/9T4ft5j/logo.png" /> */}
        <link rel="icon" href="/favicon.ico" />

        <>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
          />
          <meta
            name="description"
            content="Xinyu Chuang author: Gabrielle the  Internet Arcitect ©2022 category:application-javascript"
          />
          {/* <meta property="og:url" content="http://niksgames.com/blockland" /> */}
          <meta property="og:type" content="product" />
          <meta property="og:title" content="Xinyu Chuang" />
          <meta
            property="og:description"
            content="Xinyu Chuang author:Gabrielle ©2022 category:application-javascript"
          />
          <meta
            property="og:image"
            // content="http://niksgames.com/blockland/assets/blockland-og.jpg"
          />
          <meta
            property="og:image:type"
            content="https://i.ibb.co/9T4ft5j/logo.png"
          />
          <meta property="og:image:width" content={1265} />
          <meta property="og:image:height" content={817} />
          <meta property="og:image:alt" content="Xinyu Chuang" />
        </>

        <link rel="apple-touch-icon" href="https://i.ibb.co/9T4ft5j/logo.png" />
        <link rel="icon" href="https://i.ibb.co/9T4ft5j/logo.png" />
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
          src=" https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineMax.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"
          defer
        ></script>
         <link
            rel="preload"
            href="/fonts/FPTypewriterDEMO-RegularItalic.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
        <script src="locomotive-scroll.min.js" defer></script>
        <script type="module" src="../assets/app.js" defer></script>
      </Head>
      {isLoaded ? (
        <>
          <MobileView>
            <div>
              <div className="pb-96">
                {/* <iframe className={styles.video} src="https://drive.google.com/file/d/14w2FfWc-LfdUSPoM79y06_sdVXXG_QXa/preview?start=1"></iframe> */}
                {/* style="transform: translateY(-38.2813%);" style="position:absolute;top:0;left:0;width:100%;height:100%;" */}
                {/* <div class="video-wrapper"><div class="plyr__video-embed__container" > */}
                <iframe
                  src="https://player.vimeo.com/video/721799699?h=b659979974?background=1&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  className={styles.video}
                  allow="autoplay; fullscreen; picture-in-picture; loop=1; muted=1"
                  id="video"
                  muted
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowFullScreen
                  title="fixed metaverse"
                ></iframe>
                {/* <div class="plyr__captions"></div> */}
                {/* </div> */}
              </div>

              <div className={styles.main}>
                <div className={styles.logocontmobile}>
                  <img
                    className={styles.logomoblie}
                    src="https://i.ibb.co/X3G0Ggs/xinyu.png"
                  />
                </div>

                <div className={styles.figuren}>
                  <img
                    className={styles.figurenmobile}
                    src="https://i.ibb.co/Zm35Tgq/foreground-fixed-1.png"
                  />
                </div>

                

                {/* <h3>Recent Posts:</h3> */}

                <div className={styles.feed}>
                  {mappedPosts.length ? (
                    mappedPosts.map((p, id) => (
                      <div
                        onClick={() =>
                          router.push(`/firsttwo/${p.slug.current}`)
                        }
                        key={id}
                        className={styles.post}
                      >
                        <img
                          className={styles.mainImage}
                          src={p.mainImagefirsttwo}
                        />
                        <div>
                          <p className={styles.fontstylemobile}>
                            {p.titleofproject}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <>No Posts Yet</>
                  )}
                </div>
              </div>
            </div>

            <footer className={styles.footer}>
              <div className="pb-40 inline-grid grid-cols-1">
                <p className="px-1 ">Archive</p>
                <div className="px-1">
                  {/* <ul className="list-none font-light text-center" > */}
                  <p className=" text-center ">Contact me :)</p>
                  <li className="list-none">Xinyu.c.contact@gmail.com</li>
                  <a
                    href="https://www.instagram.com/chuangxyyy/"
                    data-location="internal"
                  >
                    Instagram
                  </a>
                  {/* </ul> */}
                </div>
              </div>

              <div>
                <p>Xinyu Chuang 2022</p>
                <a
                  href="https://www.instagram.com/is_this_gabrielle/"
                  data-location="internal"
                >
                  © Created by the Internet Arcitect
                </a>
              </div>
            </footer>
          </MobileView>

          {/* <noscript>
		You need to enable JavaScript to run this site.
	</noscript> */}

          <BrowserView>
            <main className={styles.main}>
          

            {/* <div className={styles.hscrollcont}>
  <div>OUR STORY</div>
  <div className='hscroll'>
    Lorem ipsum dolor sit amet
  </div>  
</div> */}


                  <CustomView condition={browserName === "Chrome"}>
                    <div className={styles.hscrollcont}>
                        <div className='hscroll'> 
                          <img
                            className={styles.flyingimg}
                            src="https://i.ibb.co/Pz74XhT/13-2.png"
                          />
                          <p className={styles.titleofprojecthottest}>
                            Hottest In Da Metaverse
                          </p>
                        </div>
                      </div>
                  </CustomView>   

                  <CustomView condition={browserName === "Firefox"}>
                    <div className={styles.hscrollcont}>
                        <div className='hscroll'> 
                          <img
                            className={styles.flyingimg}
                            src="https://i.ibb.co/Pz74XhT/13-2.png"
                          />
                          <p className={styles.titleofprojecthottest}>
                            Hottest In Da Metaverse
                          </p>
                        </div>
                      </div>
                  </CustomView>  

                   <CustomView condition={browserName === "Safari"}>
                    <div className={styles.hscrollcont}>
                        <div className='hscroll'> 
                          <img
                            className={styles.flyingimg}
                            src="https://i.ibb.co/Pz74XhT/13-2.png"
                          />
                          <p className={styles.titleofprojecthottest}>
                            Hottest In Da Metaverse
                          </p>
                        </div>
                      </div>
                  </CustomView>   




              <div>
                <img
                  className={styles.figuren}
                  src="https://i.ibb.co/Zm35Tgq/foreground-fixed-1.png"
                />
              </div>
          
              <section className={styles.section}>
                <div className={styles.content}>
                  <div className={styles.logocont2}>
                    <img
                      className={styles.logo}
                      src="https://i.ibb.co/X3G0Ggs/xinyu.png"
                    />
                  </div>

            

                  <CustomView condition={browserName === "Chrome"}>
                    <div className={styles.entropycont}>
                      <p className={styles.entropy}>
                        <Marquee>
                          {" "}
                          entropy entropy entropy entropy entropy entropy
                          entropy entropy entropy entropy entropy entropy
                          entropy entropy entropy entropy entropy entropy 
                          entropy entropy entropy entropy entropy entropy 
                          {" "}
                        </Marquee>
                      </p>
                    </div>
                  </CustomView>

                  <CustomView condition={browserName === "Firefox"}>
                    <div className={styles.entropycont}>
                      <p className={styles.entropy}>
                        <Marquee>
                          {" "}
                          entropy entropy entropy entropy entropy entropy
                          entropy entropy entropy entropy entropy entropy
                          entropy entropy entropy entropy entropy entropy 
                          entropy entropy entropy entropy entropy entropy 
                          {" "}
                        </Marquee>
                      </p>
                    </div>
                  </CustomView>

                  <CustomView condition={browserName === "Safari"}>
                    <div className={styles.entropycont}>
                      <p className={styles.entropy}>
                        <Marquee>
                          {" "}
                          entropy entropy entropy entropy entropy entropy
                          entropy entropy entropy entropy entropy entropy
                          entropy entropy entropy entropy entropy entropy 
                          entropy entropy entropy entropy entropy entropy 
                          {" "}
                        </Marquee>
                      </p>
                    </div>
                  </CustomView>
                </div>
                {/* </div>  */}
              </section>

              <section className={styles.section}>
                {/* <div className={styles.content}> */}
                  {/* <span className={styles.dot}></span> */}
                  {/* <h1 className={styles.entropyraw}>Raw Reality</h1> */}
                  {/* BACK IMG */}
  

                  {/* <div className={styles.test4}></div> */}
                  <CustomView condition={browserName === "Chrome"}>
                    <div className={styles.test3}></div>
                    <div className={styles.wrapper}>
                      {mappedPosts.length ? (
                        mappedPosts.map((p, id) => (
                          <div
                            onClick={() =>
                              router.push(`/projects/${p.slug.current}`)
                            }
                            key={id}
                          >
                            {/* <div className={styles.containerproject2}> */}
                            <img
                              className={styles.mainImage2}
                              src={p.mainImagefirsttwo}
                            />
                            <p className={styles.fontstyle}>
                              {p.titleofproject}
                            </p>
                          </div>
                          // </div>
                        ))
                      ) : (
                        <>No Posts Yet</>
                      )}

                      <img
                        className={styles.flower1n}
                        src="https://i.ibb.co/fMG3ydn/3-1.png"
                      />
                      <img
                        className={styles.manchrome}
                        src="https://i.ibb.co/kcNgLFB/5-1.png"
                      />





                    





                      <div className={styles.videocontchrome}>
                   
                        <iframe
                          src="https://player.vimeo.com/video/721799699?h=b659979974?background=1&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          frameBorder="0"
                          className={styles.video}
                          allow="autoplay; fullscreen; picture-in-picture; loop=1; muted=1"
                          id="video"
                          muted
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowFullScreen
                          title="fixed metaverse"
                        ></iframe>
                    
                      </div>

                      <div className={styles.botflowercont}>
                        <img
                          className={styles.botflower}
                          src="https://i.ibb.co/CBdmDQ9/1-3.png"
                        />
                      </div>

                      <img
                        className={styles.flowergreen}
                        src="https://i.ibb.co/dDcN0FP/9-1.png"
                      />
                    </div>
                  </CustomView>

                  <CustomView condition={browserName === "Firefox"}>
                    <div className={styles.test3}></div>
                    <div className={styles.wrapper}>
                      {mappedPosts.length ? (
                        mappedPosts.map((p, id) => (
                          <div
                            onClick={() =>
                              router.push(`/firsttwo/${p.slug.current}`)
                            }
                            key={id}
                          >
                            {/* <div className={styles.containerproject2}> */}
                            <img
                              className={styles.mainImage2}
                              src={p.mainImagefirsttwo}
                            />
                            <p className={styles.fontstyle}>
                              {p.titleofproject}
                            </p>
                          </div>
                          // </div>
                        ))
                      ) : (
                        <>No Posts Yet</>
                      )}

                      <img
                        className={styles.flower1n}
                        src="https://i.ibb.co/fMG3ydn/3-1.png"
                      />
                      <img
                        className={styles.man}
                        src="https://i.ibb.co/kcNgLFB/5-1.png"
                      />

                   

                      <div className={styles.videocont}>
                        {/* <iframe className={styles.video} src="https://drive.google.com/file/d/14w2FfWc-LfdUSPoM79y06_sdVXXG_QXa/preview?start=1"></iframe> */}
                        {/* style="transform: translateY(-38.2813%);" style="position:absolute;top:0;left:0;width:100%;height:100%;" */}
                        {/* <div class="video-wrapper"><div class="plyr__video-embed__container" > */}
                        <iframe
                          src="https://player.vimeo.com/video/721799699?h=b659979974?background=1&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          frameBorder="0"
                          className={styles.video}
                          allow="autoplay; fullscreen; picture-in-picture; loop=1; muted=1"
                          id="video"
                          muted
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowFullScreen
                          title="fixed metaverse"
                        ></iframe>
                        {/* <div class="plyr__captions"></div> */}
                        {/* </div> */}
                      </div>

                      <div className={styles.botflowercont}>
                        <img
                          className={styles.botflower}
                          src="https://i.ibb.co/CBdmDQ9/1-3.png"
                        />
                      </div>

                      <img
                        className={styles.flowergreen}
                        src="https://i.ibb.co/dDcN0FP/9-1.png"
                      />
                    </div>
                  </CustomView>

                  <CustomView condition={browserName === "Safari"}>
                    <div className={styles.test3}></div>
                    <div className={styles.wrapper}>
                      {mappedPosts.length ? (
                        mappedPosts.map((p, id) => (
                          <div
                            onClick={() =>
                              router.push(`/firsttwo/${p.slug.current}`)
                            }
                            key={id}
                          >
                            {/* <div className={styles.containerproject2}> */}
                            <img
                              className={styles.mainImage2}
                              src={p.mainImagefirsttwo}
                            />
                            <p className={styles.fontstyle}>
                              {p.titleofproject}
                            </p>
                          </div>
                          // </div>
                        ))
                      ) : (
                        <>No Posts Yet</>
                      )}

                      <img
                        className={styles.flower1n}
                        src="https://i.ibb.co/fMG3ydn/3-1.png"
                      />
                      <img
                        className={styles.man}
                        src="https://i.ibb.co/kcNgLFB/5-1.png"
                      />

                     

                      <div className={styles.videocont}>
                        {/* <iframe className={styles.video} src="https://drive.google.com/file/d/14w2FfWc-LfdUSPoM79y06_sdVXXG_QXa/preview?start=1"></iframe> */}
                        {/* style="transform: translateY(-38.2813%);" style="position:absolute;top:0;left:0;width:100%;height:100%;" */}
                        {/* <div class="video-wrapper"><div class="plyr__video-embed__container" > */}
                        <iframe
                          src="https://player.vimeo.com/video/721799699?h=b659979974?background=1&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          frameBorder="0"
                          className={styles.video}
                          allow="autoplay; fullscreen; picture-in-picture; loop=1; muted=1"
                          id="video"
                          muted
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowFullScreen
                          title="fixed metaverse"
                        ></iframe>
                        {/* <div class="plyr__captions"></div> */}
                        {/* </div> */}
                      </div>

                      <div className={styles.botflowercont}>
                        <img
                          className={styles.botflower}
                          src="https://i.ibb.co/CBdmDQ9/1-3.png"
                        />
                      </div>

                      <img
                        className={styles.flowergreen}
                        src="https://i.ibb.co/dDcN0FP/9-1.png"
                      />
                    </div>
                  </CustomView>
                {/* </div> */}
              </section>




        

              <footer className={styles.footer}>
                <div className="pb-40 inline-grid grid-cols-2">
                  <p className="px-1 ">Archive</p>
                  <div className="px-1">
                    <ul className="list-none font-light text-left">
                      <p className=" text-left ">Contact me :)</p>
                      <li>Xinyu.c.contact@gmail.com</li>
                      <a
                        href="https://www.instagram.com/chuangxyyy/"
                        data-location="internal"
                      >
                        Instagram
                      </a>
                    </ul>
                  </div>
                </div>

                <div>
                  <p>Xinyu Chuang 2022</p>
                  <a
                    href="https://www.instagram.com/is_this_gabrielle/"
                    data-location="internal"
                  >
                    © Created by the Internet Arcitect
                  </a>
                </div>
              </footer>
            </main>
          </BrowserView>

          
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

export const getServerSideProps = async (pageContext) => {
  // const query = encodeURIComponent('*[ _type == "firsttwo" ]');
  //   '*[ _type in ["firsttwo", "secondtwo"] ]' _id == "abc.123"
  const query = encodeURIComponent(`*[ _type in ["projects" ]]`);
  //   const query = encodeURIComponent(`*[_id in path("1.2.3.*")]`);
  const url = `https://wie5l8nw.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
        // firsttwo: [],
        // secondtwo: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
        // firsttwo: result.result,
        // secondtwo: result.result,
      },
    };
  }
};