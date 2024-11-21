import styles from "./ErrorMessage.module.css";

interface MessageProps {
  message: string;
}
const ErrorMessage: React.FC<MessageProps> = ({ message }) => {
  return (
    <div>
      <p className={styles.errorMessage}>Upps...There is an error.{message} Please try again later...</p>
    </div>
  );
};

export default ErrorMessage;