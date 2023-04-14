import styles from "./SearchBox.module.css";
import { IoIosSearch } from "react-icons/io";

export function SearchBox() {
  return (
    <form id={styles.SearchBox}>
      <input id={styles.SearchBar} placeholder="Search" />
      <button id={styles.SearchBarButton}>
        <IoIosSearch color="#F1F1F1" size="25px" />
      </button>
    </form>
  );
}
