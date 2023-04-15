import styles from "./SideBar.module.css";
import { ReactComponent as HomeIcon } from "./svg/home.svg";
import { ReactComponent as ShortsLogo } from "./svg/shorts.svg";
import { ReactComponent as SubscriptionIcon } from "./svg/subscriptions.svg";
// import { ReactComponent as LibraryIcon } from "./svg/library.svg";
// import { ReactComponent as HistoryIcon } from "./svg/history.svg";
// import { ReactComponent as YourVideoIcon } from "./svg/yourVideos.svg";
// import { ReactComponent as WatchLaterIcon } from "./svg/watchLater.svg";
// import { ReactComponent as PlayListIcon } from "./svg/playList.svg";
import classNames from "classnames";

const link = "https://www.youtube.com/";

// const Section = () => {
//   return <div></div>;
// };

// const NavPane = (Icon) => {
//   return <div>Icon</div>;
// };

const iconStyle = {
  width: 24,
  height: 24,
};

export function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.navSection}>
        <div className={styles.navBox}>
          <HomeIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Home
          </a>
        </div>

        <div className={styles.navBox}>
          <ShortsLogo className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Shorts
          </a>
        </div>

        <div className={styles.navBox}>
          <SubscriptionIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Subscriptions
          </a>
        </div>
      </div>
    </div>
  );
}
