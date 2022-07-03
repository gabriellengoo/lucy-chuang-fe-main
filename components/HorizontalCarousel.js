import { useState } from "react";

const styles = {
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  item: {
    margin: "0px 20px",
  },
  itemClick: {
    margin: "0px 20px",
    cursor: "pointer",
  },
};
const HorizontalCarousel = (props) => {
  const [top, setTop] = useState(0);
  const [middle, setMiddle] = useState(0);
  const [bottom, setBottom] = useState(0);

  let topImages = [
    "https://i.ibb.co/wQKF71b/1a-1.png",
    "https://i.ibb.co/J5NxhYM/2a-1.png",
    "https://i.ibb.co/9gGpyLs/4a-1.png",
  ];
  let middleImages = [
    "https://i.ibb.co/0fS3DX3/1b-1.png",
    "https://i.ibb.co/dmGLmyy/2b-1.png",
    "https://i.ibb.co/Vq5csSC/3b-1.png",
  ];
  let bottomImages = [
    "https://i.ibb.co/w4jrQkY/1c-1.png",
    "https://i.ibb.co/B3jCknM/2c-1.png",
    "https://i.ibb.co/tPzcDPB/3c-1.png",
  ];
  return (
    <div>
      {/* // ----------------------- top images ------------------------- */}
      <div style={styles.imageContainer}>
        <img
          style={styles.itemClick}
          onClick={() => {
            setTop((top + 2) % 3);
            console.log(top);
          }}
          src={topImages[top % 3]}
        />
        <img style={styles.item} src={topImages[(top + 1) % 3]} />
        <img
          style={styles.itemClick}
          onClick={() => {
            setTop((top + 1) % 3);
            console.log(top);
          }}
          src={topImages[(top + 2) % 3]}
        />
      </div>
      {/* // ----------------------- middle images ------------------------- */}
      <div style={styles.imageContainer}>
        <img
          style={styles.itemClick}
          onClick={() => {
            setMiddle((middle + 2) % 3);
            console.log(middle);
          }}
          src={middleImages[middle % 3]}
        />
        <img style={styles.item} src={middleImages[(middle + 1) % 3]} />
        <img
          style={styles.itemClick}
          onClick={() => {
            setMiddle((middle + 1) % 3);
            console.log(middle);
          }}
          src={middleImages[(middle + 2) % 3]}
        />
      </div>
      {/* ----------------------- bottom images ------------------------- */}
      <div style={styles.imageContainer}>
        <img
          style={styles.itemClick}
          onClick={() => {
            setBottom((bottom + 2) % 3);
            console.log(bottom);
          }}
          src={bottomImages[bottom % 3]}
        />
        <img style={styles.item} src={bottomImages[(bottom + 1) % 3]} />
        <img
          style={styles.itemClick}
          onClick={() => {
            setBottom((bottom + 1) % 3);
            console.log(bottom);
          }}
          src={bottomImages[(bottom + 2) % 3]}
        />
      </div>
    </div>
  );
};

export default HorizontalCarousel;
