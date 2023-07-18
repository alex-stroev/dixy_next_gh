import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Kernel, Button } from "../ui";

const Banners = () => {
  return (
    <div className={styles.banners}>
      <Kernel>
        <div className={styles.bannersGrid}>
          <div className={styles.bannersGrid__item}>
            <div
              className={classNames([
                styles.bannersCard,
                styles.bannersCard_banner1,
              ])}
            >
              <div className={styles.bannersCard__content}>
                <div className={styles.bannersCard__text}>
                  Заказывай продукты онлайн
                </div>
                <div className={styles.bannersCard__control}>
                  <Button
                    href="https://dostavka.dixy.ru/"
                    block
                    className={styles.button}
                  >
                    За покупками
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bannersGrid__item}>
            <div
              className={classNames([
                styles.bannersCard,
                styles.bannersCard_banner2,
              ])}
            >
              <div className={styles.bannersCard__content}>
                <div className={styles.bannersCard__text}>
                  Оставь свой отзыв в&nbsp;нашей группе Вконтакте
                </div>
                <div className={styles.bannersCard__control}>
                  <Button
                    href="https://vk.com/dixyclub"
                    block
                    orange
                    className={styles.button}
                  >
                    оставить отзыв
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bannersGrid__item}>
            <div
              className={classNames([
                styles.bannersCard,
                styles.bannersCard_banner3,
              ])}
            >
              <div className={styles.bannersCard__content}>
                <div className={styles.bannersCard__text}>
                  Установи приложение и&nbsp;получи&nbsp;5% скидки
                  на&nbsp;покупки
                </div>
                <div className={styles.bannersCard__control}>
                  <div className={styles.appsIcons}>
                    <div
                      className={classNames([
                        styles.appsIcons__cell,
                        styles.appsIcons__cell_iApp,
                      ])}
                    >
                      <a
                        href="https://apps.apple.com/ru/app/%D0%B4%D0%B8%D0%BA%D1%81%D0%B8/id1411447398"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Дикси в Appstore
                      </a>
                    </div>
                    <div
                      className={classNames([
                        styles.appsIcons__cell,
                        styles.appsIcons__cell_iGap,
                      ])}
                    ></div>
                    <div
                      className={classNames([
                        styles.appsIcons__cell,
                        styles.appsIcons__cell_iGplay,
                      ])}
                    >
                      <a
                        href="https://play.google.com/store/apps/details?id=com.ru.dixy&hl=ru"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Дикси в Google Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Kernel>
    </div>
  );
};

export default Banners;
