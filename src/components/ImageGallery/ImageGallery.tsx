import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

import { Photo } from "../App/App.types";

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (photos: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal }) => {
  if (!photos || photos.length === 0) {
    return;
  }

  return (
    <ul className={styles.galleryList}>
      {photos.map((photo) => {
        return (
          <li key={photo.id} className={styles.listItem}>
            <ImageCard photo={photo} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;