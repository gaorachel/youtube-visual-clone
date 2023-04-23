import { useRef, useState } from "react";

export function useScrollerH(moveDistance) {
  const ref = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  const handleClickBack = (moveDistance) => {
    setScrollX(scrollX - moveDistance);
    ref.current.scrollLeft -= moveDistance;
  };

  const handleClickForward = (moveDistance) => {
    setScrollX(scrollX - moveDistance);
    ref.current.scrollLeft += moveDistance;
  };

  const handleScroll = (el) => {
    setScrollX(el.target.scrollLeft);
  };

  return { ref, scrollX, handleClickBack, handleClickForward, handleScroll };
}
