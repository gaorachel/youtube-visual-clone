import { TopBar } from "components/TopBar/TopBar";
import { SideBar } from "./SideBar/SideBar";
import React, { createContext, useContext, useState } from "react";

export const SideBarContext = createContext(null);

export function HomePage() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  // const SideBarContext = useContext(SideBarContext);

  return (
    <div>
      <SideBarContext.Provider value={[sidebarExpanded, setSidebarExpanded]}>
        <TopBar />
        <SideBar />
      </SideBarContext.Provider>
    </div>
  );
}
