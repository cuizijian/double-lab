/*
 * @Descripttion: 
 * @Author: 崔子健
 * @Date: 2023-02-22 19:42:53
 * @LastEditors: 崔子健
 * @LastEditTime: 2023-03-21 13:28:09
 */
import { NavLink } from "react-router-dom";
import styles from "./index.module.less";

function SocialIcons () {
  return (
    <div className={styles.SocialIcons}>
      <img src="/img/common/discord.png" />
      <img src="/img/common/twitter.png" />
      <img src="/img/common/ins.png" />
    </div>
  );
}
function Nav () {
  return (
    <>
      <NavLink to={"/"}>
        <div className={styles.NavItem}>MAIN</div>
      </NavLink>
      <NavLink to={"/about-us"}>
        <div className={styles.NavItem}>ABOUT US</div>
      </NavLink>
    </>
  );
}
export default function Header () {
  return (
    <div className={styles.Header}>
      <div className={styles.Wrap}>
        <img
          className={styles.Logo}
          src="/img/common/double-black.png"
          alt="Double lab logo"
        />
        <span className={styles.LogoText}>DOUBLE LAB</span>
        <Nav />
        <SocialIcons />
      </div>
    </div>
  );
}
