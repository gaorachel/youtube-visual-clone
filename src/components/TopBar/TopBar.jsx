import styles from "./TopBar.module.css";
import { ReactComponent as MenuIcon } from "./svg/menu.svg";
import { ReactComponent as YoutubeLogo } from "./svg/youtube.svg";
import { ReactComponent as MicIcon } from "./svg/mic.svg";
import { ReactComponent as CameraIcon } from "./svg/camera.svg";
import { ReactComponent as NotificationIcon } from "./svg/notifications.svg";
import { SearchBox } from "./SearchBox/SearchBox";
import classNames from "classnames";

const iconStyle = {
  fill: "#FFFFFF",
  width: 24,
  height: 24,
};

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.centrePosition}>
        <button className={styles.topBarButton}>
          <MenuIcon style={iconStyle} />
        </button>
        <YoutubeLogo
          style={{
            fill: "#FFFFFF",
            width: 90,
            height: 20,
          }}
        />
        <span className={styles.countryCode}> GB </span>
      </div>

      <div className={classNames(styles.centrePosition)}>
        <SearchBox />
        <button className={classNames(styles.topBarButton, styles.micButton)}>
          <MicIcon style={iconStyle} />
        </button>
      </div>

      <div className={styles.centrePosition}>
        <button className={styles.topBarButton}>
          <CameraIcon style={iconStyle} />
        </button>
        <button className={styles.topBarButton}>
          <NotificationIcon style={iconStyle} />
        </button>
        <button className={classNames(styles.topBarButton, styles.avaterButton)}>R</button>
      </div>
    </div>
  );
}
