"use client";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Button = ({ children, href, onClick, orange, block, className }) => {
  const cnms = classNames(
    styles.button,
    className,
    [orange ? styles.orangeButton : styles.greenButton],
    { [styles.block]: block }
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cnms}>
      {children}
    </a>
  ) : (
    <button className={cnms} onClick={() => onClick()}>
      {children}
    </button>
  );
};
export default Button;
