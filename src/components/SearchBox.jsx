import styles from "./SearchBox.module.css";

function SearchBox({ onSearch }) {
  const searchHandler = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <div className={styles.searchWrapper}>
        <div className={styles.searchContainer}>
          <input
            onChange={searchHandler}
            type="text"
            className={styles.searchBox}
            placeholder="جستجو..."
          />
        </div>
      </div>
    </>
  );
}

export default SearchBox;
