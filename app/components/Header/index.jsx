import React from "react";
import { Kernel } from "../ui";
import styles from "./styles.module.scss";
const Header = () => {
  const hero = `Мы&nbsp;проводим множество проверок и&nbsp;выбираем лучших производителей, чтобы отобрать для вас самые лучшие товары и&nbsp;представить их&nbsp;эксклюзивно в&nbsp;Дикси!`;
  return (
    <Kernel>
      <div className={styles.siteHeader}>
        <a
          href="https://dixy.ru/"
          className={styles.siteHeader__dixylogo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Дикси
        </a>
        <div className={styles.siteHeader__hero}>
          <div className={styles.siteHero}>
            <div className={styles.siteHero__logo}></div>
            <div
              className={styles.siteHero__text}
              dangerouslySetInnerHTML={{ __html: hero }}
            ></div>
          </div>
        </div>
        <div className={styles.siteHeader__aside}>
          <div className={styles.siteHeader__visual}></div>
        </div>
      </div>
    </Kernel>
  );
};

export default Header;
