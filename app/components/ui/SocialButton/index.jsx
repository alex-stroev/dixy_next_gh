import classNames from "classnames";
import styles from "./styles.module.scss";

const SocialButton = ({ children, href }) => {
  const path1 = href.replace("https://", "");
  const path2 = path1.replace("www.", "").split(".")[0];
  const key = `slink_${path2}`;
  const csnm = classNames(styles.slink, styles[key]);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={csnm}
      title={children}
    >
      {children}
    </a>
  );
};
export default SocialButton;
