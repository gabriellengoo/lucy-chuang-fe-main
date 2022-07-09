
import { urlFor } from "../sanity"
import styles from '../styles/Post.module.css';

const Images = ({ identifier, image }) => {
  return (

    
    <div className={identifier === "main-image" ? "main-image" : "image"}>
      <img className={styles.mainImage} src={urlFor(image).auto("format")} />
    </div>

    
  )
}

export default Images