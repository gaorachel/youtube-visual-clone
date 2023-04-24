import { RiMore2Fill } from "react-icons/ri";
import styles from "./VideoCard.module.css";

export function VideoCard() {
  return (
    <div>
      <div className={styles.video} />
      <div className={styles.videoInfo}>
        <div className={styles.avatar} />
        <div className={styles.videoDesc}>
          <div className={styles.title}>This Is A Video Title - Lorem ipsum dolor sit amet, consectetur </div>
          <div className={styles.subInfo}>Youtuber name </div>
          <div className={styles.subInfo}> {Math.trunc(Math.random() * 88)}K views • 1 hour ago </div>
        </div>
        <RiMore2Fill More className={styles.moreOptionButton} size="20px" />
      </div>
    </div>
  );
}
