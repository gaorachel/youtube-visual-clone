import styles from "./TopBar.module.css";
import { ReactComponent as MenuLogo } from "./svg/menu.svg";
import { ReactComponent as YoutubeLogo } from "./svg/youtube.svg";
import { ReactComponent as MicLogo } from "./svg/mic.svg";
import { ReactComponent as CameraLogo } from "./svg/camera.svg";
import { ReactComponent as NotificationLogo } from "./svg/notifications.svg";
import { SearchBox } from "./SearchBox/SearchBox";

const iconStyle = {
  fill: "#FFFFFF",
  width: 24,
  height: 24,
};

export function TopBar() {
  return (
    <div className={styles.topBar}>
      {/* <MenuBotton></MenuBotton>
      <Logo />
      <SearchBox />
      <MenuBotton></MenuBotton>
      <MenuBotton></MenuBotton>
      <MenuBotton></MenuBotton>
      <MenuAvatarBotton></MenuAvatarBotton> */}

      <button className={styles.topBarMenuButton}>
        <MenuLogo style={iconStyle} />
      </button>
      <YoutubeLogo
        style={{
          fill: "#FFFFFF",
          width: 90,
          height: 20,
        }}
      />
      <SearchBox />
      <button className={styles.topBarMenuButton}>
        <MicLogo style={iconStyle} />
      </button>
      <button className={styles.topBarMenuButton}>
        <CameraLogo style={iconStyle} />
      </button>
      <button className={styles.topBarMenuButton}>
        <NotificationLogo style={iconStyle} />
      </button>
      <button className={styles.avaterButton}>R</button>
    </div>
  );
}
