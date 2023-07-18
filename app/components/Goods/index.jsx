"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Kernel, Button } from "../ui";
import listOfGoods from "../../fish_data/listOfGoods";
import GoodCard from "./GoodCard";
import Filters from "./Filters";

const Goods = () => {
  const [showQuantity, setShowQuantity] = useState(8);
  const step = 8;
  /////////////////////////////////////////
  // Бренды
  /////////////////////////////////////////
  const brandListRU = ["амели", "круглое лето", "мореслав", "хуторок"];
  const brandListEN = ["amelie", "leto", "moreslav", "hutorok"];
  const categoriesList = ["фреш", "бакалея"];
  /////////////////////////////////////////
  // Каталог и фильтрация
  /////////////////////////////////////////
  const initialGoods = [...listOfGoods];
  const [goods, setGoods] = useState([...listOfGoods]);
  /////////////////////////////////////////
  // Фильтры
  /////////////////////////////////////////
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => setShowFilters(!showFilters);

  const [brandFilterParams, setBrandFilterParams] = useState([]);
  const [categoryFilterParams, setCategoryFilterParams] = useState([]);

  const onSelectBrand = (e) => {
    e.target.checked
      ? setBrandFilterParams((brandFilterParams) => [
          ...brandFilterParams,
          e.target.value,
        ])
      : setBrandFilterParams((brandFilterParams) =>
          brandFilterParams.filter(function (f) {
            return f !== e.target.value;
          })
        );
  };
  const onSelectCategory = (e) => {
    e.target.checked
      ? setCategoryFilterParams((categoryFilterParams) => [
          ...categoryFilterParams,
          e.target.value,
        ])
      : setCategoryFilterParams((categoryFilterParams) =>
          categoryFilterParams.filter(function (f) {
            return f !== e.target.value;
          })
        );
  };
  const applyFilters = () => {
    if (brandFilterParams.length || categoryFilterParams.length) {
      let temp = initialGoods.filter(
        (item) =>
          (brandFilterParams.length
            ? brandFilterParams.includes(item.brand)
            : true) &&
          (categoryFilterParams.length
            ? categoryFilterParams.includes(item.category)
            : true)
      );
      setGoods(temp);
    } else {
      setGoods(initialGoods);
    }
    setShowQuantity(8);
    setShowFilters(false);
  };
  const resetFilters = () => {
    setBrandFilterParams([]);
    setCategoryFilterParams([]);
    setGoods(initialGoods);
    setShowQuantity(8);
    setShowFilters(false);
  };

  // if (brandFilterParams.length === brandListRU.length) {
  //   setBrandFilterParams([]);
  // }
  // if (categoryFilterParams.length === categoriesList.length) {
  //   setCategoryFilterParams([]);
  // }

  return (
    <div className={styles.ourGoods}>
      <Kernel>
        <div className={styles.ourGoods__header}>
          <div className={styles.ourGoods__h1}>
            <div className={styles.h1}>Товары</div>
          </div>
          <div className={styles.ourGoods__filters}>
            <div
              className={styles.toggleFilters}
              onClick={() => toggleFilters()}
            >
              Фильтр
            </div>
          </div>
        </div>
        {showFilters && (
          <Filters
            initialBrandsParams={brandListRU}
            initialCategoryParams={categoriesList}
            forClasses={brandListEN}
            selectedBrandParams={brandFilterParams}
            selectedCategoriesParams={categoryFilterParams}
            onSelectBrand={(e) => onSelectBrand(e)}
            onSelectCategory={(e) => onSelectCategory(e)}
            applyFilters={applyFilters}
            resetFilters={resetFilters}
          />
        )}
        {/* Товаров по запросу: {goods.length} */}
        {goods.length ? (
          <div className={styles.ourGoodsGrid}>
            {[...goods].splice(0, showQuantity).map((item) => (
              <GoodCard
                key={item.gold_code}
                forClasses={brandListEN}
                forCompare={brandListRU}
                goodItem={item}
              />
            ))}
          </div>
        ) : (
          <div className={styles.nothingFound}>Извините, ничего не найдено</div>
        )}
        {goods.length - showQuantity > 0 && (
          <div className={styles.ourGoods__button}>
            <Button
              orange
              className={styles.button}
              onClick={() => setShowQuantity(showQuantity + step)}
            >
              Показать еще {Math.min(goods.length - showQuantity, step)}
              {goods.length - showQuantity > step && (
                <span className="nobr"> из {goods.length - showQuantity} </span>
              )}
            </Button>
          </div>
        )}
      </Kernel>
    </div>
  );
};

export default Goods;
