import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import styles from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <div>
      <ul className={styles.galleryList}>
        {items.map(item => (
          <li key={item.id} onClick={() => onImageClick(item)}>
            <ImageCard
              image={item.urls.small}
              alt={item.alt_description}
              likes={item.likes}
              userName={item.user.name}
            />
          </li>
        ))}
      </ul>    
    </div>
  )
}

export default ImageGallery