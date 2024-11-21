import styles from "./ImageModal.module.css";

import Modal from "react-modal";

import { CgCloseO } from "react-icons/cg";
import { Photo } from "../App/App.types";

Modal.setAppElement("#root");

interface ImageModalProps {
  modalImages: Photo | null;
  closeModal: () => void;
  modalIsOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalImages,
  closeModal,
  modalIsOpen,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={styles.modal}>
        {modalImages && (
          <div className={styles.wrap} onClick={closeModal}>
            <button onClick={closeModal} className={styles.btn}>
              <CgCloseO />
            </button>
            <img
              src={modalImages.urls.regular}
              alt={modalImages.alt_description}
              className={styles.img}
            />
            <div className={styles.wrapper}>
              <p className={styles.text}>
                Photo: {modalImages.alt_description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;