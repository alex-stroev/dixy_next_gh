import styles from "./styles.module.scss";
import classNames from "classnames";
// import Image from "next/image";
const basePath = ""

const GoodCard = ({ goodItem, forClasses, forCompare }) => {
  return (
    <div
      //   className={"ourGoodsCard test_" + setCategoryName(goodItem.category)}
      className={classNames(styles.ourGoodsCard)}
      //   data-type={goodItem.category}
      //   data-brand={setBrandClass(goodItem.brand)}
      //   data-goldcode={goodItem.gold_code}
      //   data-category={setCategoryName(goodItem.category)}
    >
      <div
        className={classNames(
          styles.ourGoodsCard__sticker,
          styles[forClasses[forCompare.indexOf(goodItem.brand)]]
        )}
      ></div>
      <div className={styles.ourGoodsCard__pic}>
        {/* <Image
          src={goodItem.img}
          alt={goodItem.name.toLowerCase()}
          width={600}
          height={600}
          priority
        /> */}
        <img src={basePath + goodItem.img} alt={goodItem.name.toLowerCase()} />
      </div>
      <div className={styles.ourGoodsCard__text}>
        {goodItem.name.toLowerCase()}
        <div className={styles.category}>{goodItem.category}</div>
      </div>
    </div>
  );
};

export default GoodCard;

/////////////////////////////////////////////////////////////////////////
//   HELPER FUNCTIONS
/////////////////////////////////////////////////////////////////////////

function setCategoryName(arg) {
  let categoryName = arg.toLowerCase();

  if (categoryName === "фреш") {
    categoryName = "fresh";
  } else if (categoryName === "бакалея") {
    categoryName = "grocery";
  } else {
    categoryName = "";
  }
  return categoryName;
}
