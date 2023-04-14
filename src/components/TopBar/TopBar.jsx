import styles from "./TopBar.module.css";
import { MenuBotton, MenuAvatarBotton } from "./TopBarBotton/TopBarBotton";
import { SearchBox } from "./SearchBox/SearchBox";
import { ReactComponent as Logo } from "./youtube.svg";
// import classNames from "classnames";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <MenuBotton></MenuBotton>
      <Logo />
      <SearchBox />
      <MenuBotton></MenuBotton>
      <MenuBotton></MenuBotton>
      <MenuBotton></MenuBotton>
      <MenuAvatarBotton></MenuAvatarBotton>

      {/* <button className={styles.topBarMenuButton} />
      <button className={styles.topBarMenuButton} />
      <button className={styles.topBarMenuButton} />
      <button className={styles.avaterButton}></button> */}
    </div>
  );
}
