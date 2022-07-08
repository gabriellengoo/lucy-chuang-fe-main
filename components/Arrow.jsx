export default function Arrow({ onClick, direction }) {
  const styles = {
    cursor: "pointer",
    width: "5vw",
    display: "flex",
    alignSelf: "center",
    filter: "hue-rotate(192deg)",
  };
  if (direction === "left") {
    return (
      <img style={styles} onClick={onClick} src='/images/arrow-left.png' />
    );
  } else {
    return (
      <img style={styles} onClick={onClick} src='/images/arrow-right.png' />
    );
  }
}
