import styles from "./TopBar.module.css";
import { ReactComponent as MenuIcon } from "./svg/menu.svg";
import { ReactComponent as YoutubeLogo } from "./svg/youtube.svg";
import { ReactComponent as MicIcon } from "./svg/mic.svg";
import { ReactComponent as CameraIcon } from "./svg/camera.svg";
import { ReactComponent as NotificationIcon } from "./svg/notifications.svg";
import { SearchBox } from "./SearchBox/SearchBox";
import classNames from "classnames";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.centrePosition}>
        <button className={styles.topBarButton} aria-label="menu">
          <MenuIcon className={styles.topBarIcon} />
        </button>
        <YoutubeLogo />
        <span className={styles.countryCode}> GB </span>
      </div>

      <div className={styles.centrePosition}>
        <SearchBox />
        <button className={classNames(styles.topBarButton, styles.micButton)} aria-label="create a video">
          <MicIcon className={styles.topBarIcon} />
        </button>
      </div>

      <div className={styles.centrePosition}>
        <button className={styles.topBarButton} aria-label="search with your voice">
          <CameraIcon className={styles.topBarIcon} />
        </button>
        <button className={styles.topBarButton} aria-label="notifications">
          <NotificationIcon className={styles.topBarIcon} />
        </button>
        <button className={classNames(styles.topBarButton, styles.avatarButton)} aria-label="avatar">
          R
        </button>
      </div>
    </div>
  );
}
