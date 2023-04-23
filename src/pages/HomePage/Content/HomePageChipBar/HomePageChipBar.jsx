import { Chip } from "components/Chip/Chip";
import { FullRoundedButton } from "components/Button/Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import React from "react";
import { useScrollerH } from "hooks/use-scroller-h";
import styles from "./HomePageChipBar.module.css";

export function FeedFilterChipBar() {
  const moveDistance = 200;
  const { ref, scrollX, handleClickBack, handleClickForward, handleScroll } = useScrollerH(moveDistance);

  const chipArr = [
    "All",
    "Music",
    "Mixes",
    "News",
    "Live",
    "Recently uploaded",
    "Watched",
    "New to you",
    "Other chip1",
    "Other chip2",
    "Other chip3",
    "Other chip4",
    "Other chip5",
    "Lorem ipsum",
    "Dolor sit amet",
    "Consectetur adipiscing",
    "In elit",
    "Duis ut",
    "Vivamus tempor",
    "Morbi nisl",
    "Aenean eu",
    "Donec ipsum",
    "Vestibulum",
    "Phasellus aliquam",
  ];

  return (
    <div className={styles.chipBarWithButton}>
      <div>
        <FullRoundedButton
          onClick={() => handleClickBack(moveDistance)}
          className={scrollX > 0 ? styles.chipBarButton : styles.chipBarButtonHidden}
          buttonText={<IoIosArrowBack size="16px" />}
        />
      </div>
      <div className={styles.chipBar} ref={ref} onScroll={(el) => handleScroll(el)}>
        {chipArr.map((chip) => {
          return <Chip className={styles.homePageChip} chipText={chip} key={chip} />;
        })}
      </div>
      <div>
        <FullRoundedButton
          onClick={() => handleClickForward(moveDistance)}
          className={scrollX > ref.current?.clientWidth ?? 0 ? styles.chipBarButtonHidden : styles.chipBarButton}
          buttonText={<IoIosArrowForward size="16px" />}
        />
      </div>
    </div>
  );
}
