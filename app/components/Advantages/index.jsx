import React from "react";
import { Kernel } from "../ui";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Advantages = () => {
  const content = {
    quality: `Для производства наших марок используется специально отобранное сырье, сберегающие технологии производства. Мы&nbsp;проверяем образцы наших товаров на&nbsp;соответствие регламентам и&nbsp;ГОСТам, контролируем процесс производства и&nbsp;предлагаем вам лучшее`,
    goodprice: `Стараемся делать доступные продукты по&nbsp;доступным ценам для вас! Все это возможно благодаря нашим партнерам-производителям продуктов и&nbsp;упаковки`,
    flavourrules: `Вкусовые качества наших товаров подтверждаются многочисленными &laquo;слепыми&raquo; дегустациями, проводимыми как в&nbsp;компании, так и&nbsp;среди наших покупателей`,
  };
  return (
    <div className={styles.advantages}>
      <Kernel>
        <div className={styles.advantages__header}>
          <h2>Преимущества</h2>
        </div>
        <div className={styles.advantagesGrid}>
          <div className={styles.advantagesCard}>
            <div className={styles.advantagesCard__iconNest}>
              <div
                className={classNames(
                  styles.advantagesCard__icon,
                  styles.advantagesCard__icon_i1
                )}
              ></div>
            </div>
            <div className={styles.advantagesCard__title}>Высокое качество</div>
            <div
              className={styles.advantagesCard__text}
              dangerouslySetInnerHTML={{ __html: content.quality }}
            ></div>
          </div>
          <div className={styles.advantagesCard}>
            <div className={styles.advantagesCard}>
              <div className={styles.advantagesCard__iconNest}>
                <div
                  className={classNames(
                    styles.advantagesCard__icon,
                    styles.advantagesCard__icon_i2
                  )}
                ></div>
              </div>
              <div className={styles.advantagesCard__title}>Доступная цена</div>
              <div
                className={styles.advantagesCard__text}
                dangerouslySetInnerHTML={{ __html: content.goodprice }}
              ></div>
            </div>
          </div>
          <div className={styles.advantagesCard}>
            <div className={styles.advantagesCard}>
              <div className={styles.advantagesCard__iconNest}>
                <div
                  className={classNames(
                    styles.advantagesCard__icon,
                    styles.advantagesCard__icon_i3
                  )}
                ></div>
              </div>
              <div className={styles.advantagesCard__title}>
                Вкус&nbsp;&mdash; превыше всего!
              </div>
              <div
                className={styles.advantagesCard__text}
                dangerouslySetInnerHTML={{ __html: content.flavourrules }}
              ></div>
            </div>
          </div>
        </div>
      </Kernel>
    </div>
  );
};

export default Advantages;
