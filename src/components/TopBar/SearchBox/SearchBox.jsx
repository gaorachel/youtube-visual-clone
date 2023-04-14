import styles from "./SearchBox.module.css";
import { ReactComponent as SearchIcon } from "../svg/searchIcon.svg";

export function SearchBox() {
  return (
    <form className={styles.searchBox}>
      <input className={styles.searchBar} placeholder="Search" style={{ color: "#FFFFFF" }} />
      <button className={styles.searchBarButton}>
        <SearchIcon style={{ fill: "#FFFFFF", width: 24, height: 24 }} />
      </button>
    </form>
  );
}
