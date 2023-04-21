import classNames from "classnames";
import React, { useContext } from "react";
import { SideBarContext } from "../HomePage";
import styles from "./SideBar.module.css";
import {
  mainSection1,
  mainSection2,
  exploreSection,
  moreFromYoutubeSection,
  footerSection,
  guildLinkPart1,
  guildLinkPart2,
  collapsedSidebar,
} from "./sidebarContent";

export function SideBar() {
  const [sidebarExpanded] = useContext(SideBarContext);

  if (!sidebarExpanded)
    return (
      <div className={styles.sideBarCollapsed}>
        {collapsedSidebar.map((item) => {
          return (
            <div className={styles.collapsedBox} key={"collapsed+" + item.text}>
              {item.icon}
              <a className={styles.collapsedText} href={item.url}>
                {item.text}
              </a>
            </div>
          );
        })}
      </div>
    );

  return (
    <div className={styles.sideBar}>
      <div className={styles.navSection}>
        {mainSection1.map((item) => {
          return (
            <div className={styles.navBox} key={"expanded+" + item.text}>
              {item.icon}
              <a href={item.url} className={styles.navText}>
                {item.text}
              </a>
            </div>
          );
        })}
      </div>

      <div className={styles.navSection}>
        {mainSection2.map((item) => {
          return (
            <div className={styles.navBox} key={"expanded+" + item.text}>
              {item.icon}
              <a href={item.url} className={styles.navText}>
                {item.text}
              </a>
            </div>
          );
        })}
      </div>

      <div className={styles.navSection}>
        <div className={styles.sectionHeader}>Explore</div>
        {exploreSection.map((item) => {
          return (
            <div className={styles.navBox} key={"expanded+" + item.text}>
              {item.icon}
              <a href={item.url} className={styles.navText}>
                {item.text}
              </a>
            </div>
          );
        })}
      </div>

      <div className={styles.navSection}>
        <div className={styles.sectionHeader}>More from YouTube</div>
        {moreFromYoutubeSection.map((item) => {
          return (
            <div className={styles.navBox} key={"expanded+" + item.text}>
              {item.icon}
              <a href={item.url} className={styles.navText}>
                {item.text}
              </a>
            </div>
          );
        })}
      </div>

      <div className={styles.navSection}>
        {footerSection.map((item) => {
          return (
            <div className={styles.navBox} key={"expanded+" + item.text}>
              {item.icon}
              <a href={item.url} className={styles.navText}>
                {item.text}
              </a>
            </div>
          );
        })}
      </div>

      <div className={classNames(styles.navSection, styles.footerBox)}>
        {guildLinkPart1.map((item) => {
          return (
            <a href={item.url} className={styles.footerText} key={"expanded+" + item.text}>
              {item.text}
            </a>
          );
        })}
      </div>
      <div className={classNames(styles.navSection, styles.footerBox)}>
        {guildLinkPart2.map((item) => {
          return (
            <a href={item.url} className={styles.footerText} key={"expanded+" + item.text}>
              {item.text}
            </a>
          );
        })}
        <div className={styles.copyrightBox}>
          <div className={styles.copyright}>© 2023 Google LLC (fake)</div>
        </div>
      </div>
    </div>
  );
}
