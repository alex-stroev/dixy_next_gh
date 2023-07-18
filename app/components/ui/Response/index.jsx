import styles from "./styles.module.scss";
import Stars from "../Stars";

const Response = ({ response }) => {
  return (
    <div className={styles.response}>
      <div className={styles.response__name}>
        Имя: <b>{response.name}</b>
      </div>
      <div className={styles.response__rating}>
        <span>Оценка:</span> <Stars rating={response.rating * 20} />
      </div>
      <div className={styles.response__text}>{response.text}</div>
    </div>
  );
};

export default Response;
