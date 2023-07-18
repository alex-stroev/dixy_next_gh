// "use client";
import styles from "./page.module.scss";

import Header from "./components/Header";
import Brands from "./components/Brands";
import Advantages from "./components/Advantages";
import Goods from "./components/Goods";
import Responses from "./components/Responses";
import Banners from "./components/Banners";
import Footer from "./components/Footer";

export const metadata = {
  title: "Эксклюзивно в Дикси",
  description:
    "Первая версия сайта",
  robots: "noindex, nofollow",
};


export default function Home() {
  return (
    <>
      <div className={styles.topSection}>
        <Header />
        <Brands />
        <Advantages />
      </div>
      <Goods />
      <Responses />
      <Banners />
      <Footer />
    </>
  );
}
