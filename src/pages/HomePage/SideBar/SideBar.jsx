import styles from "./SideBar.module.css";
import { ReactComponent as HomeIcon } from "./svg/home.svg";
import { ReactComponent as ShortsLogo } from "./svg/shorts.svg";
import { ReactComponent as SubscriptionIcon } from "./svg/subscriptions.svg";
import { ReactComponent as LibraryIcon } from "./svg/library.svg";
import { ReactComponent as HistoryIcon } from "./svg/history.svg";
import { ReactComponent as YourVideoIcon } from "./svg/yourVideos.svg";
import { ReactComponent as WatchLaterIcon } from "./svg/watchLater.svg";
import { ReactComponent as PlayListIcon } from "./svg/playList.svg";
import { ReactComponent as LikedVideoIcon } from "./svg/likedVideos.svg";
import { ReactComponent as TrendingIcon } from "./svg/trending.svg";
import { ReactComponent as MusicIcon } from "./svg/music.svg";
import { ReactComponent as MoviesAndShowsIcon } from "./svg/moviesAndShows.svg";
import { ReactComponent as LiveIcon } from "./svg/live.svg";
import { ReactComponent as GamingIcon } from "./svg/gaming.svg";
import { ReactComponent as NewsIcon } from "./svg/news.svg";
import { ReactComponent as SportIcon } from "./svg/sport.svg";
import { ReactComponent as LearningIcon } from "./svg/learning.svg";
import { ReactComponent as FashionAndBeautyIcon } from "./svg/fashionAndBeauty.svg";

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

      <div className={styles.navSection}>
        <div className={styles.navBox}>
          <LibraryIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Library
          </a>
        </div>
        <div className={styles.navBox}>
          <HistoryIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            History
          </a>
        </div>
        <div className={styles.navBox}>
          <YourVideoIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Your Videos
          </a>
        </div>
        <div className={styles.navBox}>
          <WatchLaterIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Watch Later
          </a>
        </div>
        <div className={styles.navBox}>
          <PlayListIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Play List
          </a>
        </div>
        <div className={styles.navBox}>
          <LikedVideoIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Liked Videos
          </a>
        </div>
      </div>

      <div className={styles.navSection}>
        <div className={styles.sectionHeader}>Subscriptions</div>
      </div>
      <div className={styles.navSection}>
        <div className={styles.sectionHeader}>Explore</div>
        <div className={styles.navBox}>
          <TrendingIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Trending
          </a>
        </div>
        <div className={styles.navBox}>
          <MusicIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Music
          </a>
        </div>
        <div className={styles.navBox}>
          <MoviesAndShowsIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Movies & shows
          </a>
        </div>
        <div className={styles.navBox}>
          <LiveIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Live
          </a>
        </div>
        <div className={styles.navBox}>
          <GamingIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Gaming
          </a>
        </div>
        <div className={styles.navBox}>
          <NewsIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            News
          </a>
        </div>
        <div className={styles.navBox}>
          <SportIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Sport
          </a>
        </div>
        <div className={styles.navBox}>
          <LearningIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Learning
          </a>
        </div>
        <div className={styles.navBox}>
          <FashionAndBeautyIcon className={styles.navIcon} style={iconStyle} />
          <a href={link} className={styles.navText}>
            Fashion & Beauty
          </a>
        </div>
      </div>

      <div className={styles.navSection}>
        <div className={styles.sectionHeader}>More from YouTube</div>
      </div>
    </div>
  );
}
