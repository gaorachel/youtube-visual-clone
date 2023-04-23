import { Chip } from "components/Chip/Chip";
import { FullRoundedButton } from "components/Button/Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import React, { useRef, useState } from "react";
import styles from "./HomePageChipBar.module.css";

export function FeedFilterChipBar() {
  const ref = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const moveDistance = 200;

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
          onClick={() => {
            setScrollX(scrollX - moveDistance);
            ref.current.scrollLeft -= moveDistance;
          }}
          className={scrollX > 0 ? styles.chipBarButton : styles.chipBarButtonHidden}
          buttonText={<IoIosArrowBack size="16px" />}
        />
      </div>
      <div
        className={styles.chipBar}
        ref={ref}
        onScroll={(el) => {
          setScrollX(el.target.scrollLeft);
        }}
      >
        {chipArr.map((chip) => {
          return <Chip className={styles.homePageChip} chipText={chip} key={chip} />;
        })}
      </div>
      <div>
        <FullRoundedButton
          onClick={() => {
            setScrollX(scrollX + moveDistance);
            ref.current.scrollLeft += moveDistance;
          }}
          className={scrollX < ref.current?.clientWidth ?? 0 - 50 ? styles.chipBarButton : styles.chipBarButtonHidden}
          buttonText={<IoIosArrowForward size="16px" />}
        />
      </div>
    </div>
  );
}
