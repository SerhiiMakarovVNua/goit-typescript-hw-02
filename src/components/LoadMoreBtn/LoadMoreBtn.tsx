import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div>
      <button className={styles.loadMoreButton} type="button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;