import styles from "./styles.module.scss";
import classNames from "classnames";
const Filters = ({
  initialBrandsParams,
  initialCategoryParams,
  forClasses,
  selectedBrandParams,
  onSelectBrand,
  onSelectCategory,
  applyFilters,
  resetFilters,
  selectedCategoriesParams,
}) => {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filters}>
        <div className={styles.filters__row}>
          <div className={styles.filters__brandsgrid}>
            {initialBrandsParams.map((item, index) => (
              <div key={item} className={styles.filters__brandsgriditem}>
                <label title={item}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => onSelectBrand(e)}
                    checked={selectedBrandParams.includes(item)}
                  />
                  <span className={styles[forClasses[index]]}></span>
                </label>
              </div>
            ))}
          </div>
          <div className={styles.filters__brandsgrid}>
            {initialCategoryParams.map((item) => (
              <div key={item} className={styles.filters__brandsgriditem}>
                <label title={item}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => onSelectCategory(e)}
                    checked={selectedCategoriesParams.includes(item)}
                  />
                  <span className={""}>{item}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className={classNames(styles.filters__row, styles.iButtons)}>
          <button
            onClick={() => applyFilters()}
            disabled={
              !selectedBrandParams.length && !selectedCategoriesParams.length
            }
            className={styles.submit}
          >
            применить
          </button>
          <button onClick={() => resetFilters()} className={styles.reset}>
            очистить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
