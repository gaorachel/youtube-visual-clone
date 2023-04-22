import React, { createContext, useState } from "react";
import { TopBar } from "components/TopBar/TopBar";
import { SideBar } from "./SideBar/SideBar";
import { FeedFilterChipBar } from "./Content/HomePageChipBar/HomePageChipBar";
import styles from "./HomePage.module.css";

export const SideBarContext = createContext(null);

export function HomePage() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div>
      <SideBarContext.Provider value={[sidebarExpanded, setSidebarExpanded]}>
        <TopBar />
        <div className={styles.sideBarAndContentContainer}>
          <SideBar />
          <FeedFilterChipBar />
        </div>
      </SideBarContext.Provider>
    </div>
  );
}
