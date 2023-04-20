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
import { ReactComponent as YoutubePremiumIcon } from "./svg/ytPremium.svg";
import { ReactComponent as YoutubeStudioIcon } from "./svg/ytStudio.svg";
import { ReactComponent as YoutubeMusicIcon } from "./svg/ytMusic.svg";
import { ReactComponent as YoutubeKidsIcon } from "./svg/ytKids.svg";
import { ReactComponent as SettingsIcon } from "./svg/settings.svg";
import { ReactComponent as ReportHistoryIcon } from "./svg/reportHistory.svg";
import { ReactComponent as HelpIcon } from "./svg/help.svg";
import { ReactComponent as SendFeedbackIcon } from "./svg/sendFeedback.svg";
import classNames from "classnames";
import React, { useContext } from "react";
import { SideBarContext } from "../HomePage";

const link = "https://www.youtube.com/";

export function SideBar() {
  const [sidebarExpanded] = useContext(SideBarContext);

  if (!sidebarExpanded)
    return (
      <div className={styles.sideBarCollapsed}>
        <div>Home</div>
        <div>Shorts</div>
        <div>Subscriptions</div>
        <div>Library</div>
      </div>
    );

  return (
    <div className={styles.sideBar}>
      <div className={styles.navSection}>
        <div className={styles.navBox}>
          <HomeIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Home
          </a>
        </div>

        <div className={styles.navBox}>
          <ShortsLogo className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Shorts
          </a>
        </div>

        <div className={styles.navBox}>
          <SubscriptionIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Subscriptions
          </a>
        </div>
      </div>

      <div className={styles.navSection}>
        <div className={styles.navBox}>
          <LibraryIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Library
          </a>
        </div>
        <div className={styles.navBox}>
          <HistoryIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            History
          </a>
        </div>
        <div className={styles.navBox}>
          <YourVideoIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Your Videos
          </a>
        </div>
        <div className={styles.navBox}>
          <WatchLaterIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Watch Later
          </a>
        </div>
        <div className={styles.navBox}>
          <PlayListIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Play List
          </a>
        </div>
        <div className={styles.navBox}>
          <LikedVideoIcon className={styles.navIcon} />
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
          <TrendingIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Trending
          </a>
        </div>
        <div className={styles.navBox}>
          <MusicIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Music
          </a>
        </div>
        <div className={styles.navBox}>
          <MoviesAndShowsIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Movies & shows
          </a>
        </div>
        <div className={styles.navBox}>
          <LiveIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Live
          </a>
        </div>
        <div className={styles.navBox}>
          <GamingIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Gaming
          </a>
        </div>
        <div className={styles.navBox}>
          <NewsIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            News
          </a>
        </div>
        <div className={styles.navBox}>
          <SportIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Sport
          </a>
        </div>
        <div className={styles.navBox}>
          <LearningIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Learning
          </a>
        </div>
        <div className={styles.navBox}>
          <FashionAndBeautyIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Fashion & Beauty
          </a>
        </div>
      </div>

      <div className={styles.navSection}>
        <div className={styles.sectionHeader}>More from YouTube</div>
        <div className={styles.navBox}>
          <YoutubePremiumIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            YouTube Premium
          </a>
        </div>
        <div className={styles.navBox}>
          <YoutubeStudioIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            YouTube Studio
          </a>
        </div>
        <div className={styles.navBox}>
          <YoutubeMusicIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            YouTube Music
          </a>
        </div>
        <div className={styles.navBox}>
          <YoutubeKidsIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            YouTube Kids
          </a>
        </div>
      </div>

      <div className={styles.navSection}>
        <div className={styles.navBox}>
          <SettingsIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Settings
          </a>
        </div>
        <div className={styles.navBox}>
          <ReportHistoryIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Report History
          </a>
        </div>
        <div className={styles.navBox}>
          <HelpIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Help
          </a>
        </div>
        <div className={styles.navBox}>
          <SendFeedbackIcon className={styles.navIcon} />
          <a href={link} className={styles.navText}>
            Send Feedback
          </a>
        </div>
      </div>

      <div className={classNames(styles.navSection, styles.footerBox)}>
        <a href="https://about.youtube/" className={styles.footerText}>
          About
        </a>
        <a href="https://blog.youtube/" className={styles.footerText}>
          Press
        </a>
        <a href="https://www.youtube.com/howyoutubeworks/policies/copyright/" className={styles.footerText}>
          Copyright
        </a>
        <a href="https://www.youtube.com/t/contact_us/" className={styles.footerText}>
          Contact Us
        </a>
        <a href="https://www.youtube.com/creators/" className={styles.footerText}>
          Creator
        </a>
        <a href="https://www.youtube.com/ads/" className={styles.footerText}>
          Advertise
        </a>
        <a href="https://developers.google.com/youtube" className={styles.footerText}>
          Developers
        </a>
      </div>

      <div className={classNames(styles.navSection, styles.footerBox)}>
        <a slot="" href="https://www.youtube.com/t/terms" className={styles.footerText}>
          Terms
        </a>
        <a href="https://policies.google.com/privacy?hl=en-GB" className={styles.footerText}>
          Privacy
        </a>
        <a href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/" className={styles.footerText}>
          Policy & Safety
        </a>
        <a
          href="https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen"
          className={styles.footerText}
        >
          How YouTube works
        </a>
        <a href="https://www.youtube.com/new" className={styles.footerText}>
          Test new features
        </a>
        <div className={styles.copyrightBox}>
          <div className={styles.copyright}>© 2023 Google LLC (fake)</div>
        </div>
      </div>
    </div>
  );
}
