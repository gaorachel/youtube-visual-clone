import { Chip } from "components/Chip/Chip";
import { FullRoundedButton } from "components/Button/Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import React from "react";
import { useHorizontalScroll } from "hooks/use-horizontal-scroll";
import styles from "./HomePageChipBar.module.css";

export function FeedFilterChipBar() {
  const moveDistance = 200;
  const { ref, scrollX, handleClickBack, handleClickForward, handleScroll } = useHorizontalScroll(moveDistance);

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
          className={styles.chipBarButton}
          style={{ visibility: scrollX === 0 ? "hidden" : "visible" }}
        >
          <IoIosArrowBack size="16px" />
        </FullRoundedButton>
      </div>
      <div className={styles.chipBar} ref={ref} onScroll={(e) => handleScroll(e)}>
        {chipArr.map((chip) => {
          return (
            <Chip className={styles.homePageChip} key={chip}>
              {chip}
            </Chip>
          );
        })}
      </div>
      <div>
        <FullRoundedButton
          onClick={() => handleClickForward(moveDistance)}
          className={styles.chipBarButton}
          style={{ visibility: scrollX > ref.current?.clientWidth ?? 0 ? "hidden" : "visible" }}
        >
          <IoIosArrowForward size="16px" />
        </FullRoundedButton>
      </div>
    </div>
  );
}
