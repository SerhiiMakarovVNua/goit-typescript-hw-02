import { Photo } from "../App/App.types";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  photo: Photo;
  openModal: (photo: Photo) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, openModal }) => {
  return (
    <div className={styles.imageCard}>
      <img
        className={styles.imageItem}
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={() => openModal(photo)}
      />
    </div>
  );
};

export default ImageCard;