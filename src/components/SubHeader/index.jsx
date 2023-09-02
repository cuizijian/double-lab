import { useRef, Fragment } from "react";
import styles from "./index.module.less";
export default function SubHeader() {
  const navs = useRef([
    {
      name: "CosmoChamber",
      link: "https://cosmochamber.art",
    },
    {
      name: "Everything but the Cats",
      link: "https://cosmochamber.art",
    },
    {
      name: "Time Slice 103",
      link: "https://cosmochamber.art",
    },
    {
      name: "Tracing by Ni",
      link: "https://cosmochamber.art",
    },
    {
      name: "Drifting Mangrove Seeds",
      link: "https://cosmochamber.art",
    },
    {
      name: "Grateful Skeleton",
      link: "https://cosmochamber.art",
    },
    {
      name: "bughitory",
      link: "https://cosmochamber.art",
    },
  ]);
  return (
    <div className={styles.SubHeader}>
      {navs.current.map((item, index) => {
        return (
          <Fragment key={"sub_nav_" + index}>
            <a href={item.link} target="_blank">
              <span key={"project_" + index} className={styles.ProjectItem}>
                {item.name}
              </span>
            </a>
            {index !== navs.current.length - 1 && (
              <span className={styles.Spliter}>|</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
