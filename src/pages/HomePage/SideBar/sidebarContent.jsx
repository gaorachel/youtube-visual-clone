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

export const url = "https://www.youtube.com/";

export const mainSection1 = [
  {
    icon: <HomeIcon className={styles.navIcon} />,
    text: "Home",
    url,
  },
  {
    icon: <ShortsLogo className={styles.navIcon} />,
    text: "Shorts",
    url,
  },
  {
    icon: <SubscriptionIcon className={styles.navIcon} />,
    text: "Subscriptions",
    url,
  },
];

export const mainSection2 = [
  {
    icon: <LibraryIcon className={styles.navIcon} />,
    text: "Library",
    url,
  },
  {
    icon: <HistoryIcon className={styles.navIcon} />,
    text: "History",
    url,
  },
  {
    icon: <YourVideoIcon className={styles.navIcon} />,
    text: "Your videos",
    url,
  },
  {
    icon: <WatchLaterIcon className={styles.navIcon} />,
    text: "Watch Later",
    url,
  },
  {
    icon: <LikedVideoIcon className={styles.navIcon} />,
    text: "Liked videos",
    url,
  },
  {
    icon: <PlayListIcon className={styles.navIcon} />,
    text: "Play list",
    url,
  },
];

export const exploreSection = [
  {
    icon: <TrendingIcon className={styles.navIcon} />,
    text: "Trending",
    url,
  },
  {
    icon: <MusicIcon className={styles.navIcon} />,
    text: "Music",
    url,
  },
  {
    icon: <MoviesAndShowsIcon className={styles.navIcon} />,
    text: "Movies & Shows",
    url,
  },
  {
    icon: <LiveIcon className={styles.navIcon} />,
    text: "Live",
    url,
  },
  {
    icon: <GamingIcon className={styles.navIcon} />,
    text: "Gaming",
    url,
  },
  {
    icon: <NewsIcon className={styles.navIcon} />,
    text: "News",
    url,
  },
  {
    icon: <SportIcon className={styles.navIcon} />,
    text: "Sport",
    url,
  },
  {
    icon: <LearningIcon className={styles.navIcon} />,
    text: "Learning",
    url,
  },
  {
    icon: <FashionAndBeautyIcon className={styles.navIcon} />,
    text: "Fashion & beauty",
    url,
  },
];

export const moreFromYoutubeSection = [
  {
    icon: <YoutubePremiumIcon className={styles.navIcon} />,
    text: "YouTube Premium",
    url,
  },
  {
    icon: <YoutubeStudioIcon className={styles.navIcon} />,
    text: "YouTube Studio",
    url,
  },
  {
    icon: <YoutubeMusicIcon className={styles.navIcon} />,
    text: "YouTube Music",
    url,
  },
  {
    icon: <YoutubeKidsIcon className={styles.navIcon} />,
    text: "YouTube Kids",
    url,
  },
];

export const footerSection = [
  {
    icon: <SettingsIcon className={styles.navIcon} />,
    text: "Setting",
    url,
  },
  {
    icon: <ReportHistoryIcon className={styles.navIcon} />,
    text: "Report history",
    url,
  },
  {
    icon: <HelpIcon className={styles.navIcon} />,
    text: "Help",
    url,
  },
  {
    icon: <SendFeedbackIcon className={styles.navIcon} />,
    text: "Send feedback",
    url,
  },
];

export const guildLinkPart1 = [
  {
    text: "About",
    url,
  },
  {
    text: "Press",
    url,
  },
  {
    text: "Copyright",
    url,
  },
  {
    text: "Contact us",
    url,
  },
  {
    text: "Creator",
    url,
  },
  {
    text: "Advertise",
    url,
  },
  {
    text: "Developers",
    url,
  },
];

export const guildLinkPart2 = [
  {
    text: "Term",
    url,
  },
  {
    text: "Privacy",
    url,
  },
  {
    text: "Policy & Safety",
    url,
  },
  {
    text: "How YouTube works",
    url,
  },
  {
    text: "Test new features",
    url,
  },
];

export const collapsedSidebar = [
  {
    icon: <HomeIcon className={styles.collapsedIcon} />,
    text: "Home",
    url,
  },
  {
    icon: <ShortsLogo className={styles.collapsedIcon} />,
    text: "Shorts",
    url,
  },
  {
    icon: <SubscriptionIcon className={styles.collapsedIcon} />,
    text: "Subscriptions",
    url,
  },
  {
    icon: <LibraryIcon className={styles.collapsedIcon} />,
    text: "Library",
    url,
  },
];
