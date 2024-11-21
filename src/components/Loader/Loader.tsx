import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.css";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="cadetblue"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;