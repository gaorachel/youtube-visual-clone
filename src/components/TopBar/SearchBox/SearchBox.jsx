import styles from "./SearchBox.module.css";
import { ReactComponent as SearchIcon } from "../svg/searchIcon.svg";

export function SearchBox() {
  return (
    <form className={styles.searchBox}>
      <input className={styles.searchBar} placeholder="Search" />
      <button className={styles.searchBarButton}>
        <SearchIcon className={styles.searchIcon} />
      </button>
    </form>
  );
}
