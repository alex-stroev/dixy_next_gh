import styles from "./styles.module.scss";
import classNames from "classnames";
const BrandCard = ({ brand, content }) => {
  return (
    <div className={classNames(styles.brandsCard, styles[brand])}>
      <div className={styles.brandsCard__logo}>
        <span></span>
      </div>
      <div
        className={styles.brandsCard__text}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BrandCard;
