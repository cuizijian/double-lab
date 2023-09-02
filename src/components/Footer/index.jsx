/*
 * @Descripttion: 
 * @Author: 崔子健
 * @Date: 2023-02-22 19:48:35
 * @LastEditors: 崔子健
 * @LastEditTime: 2023-03-21 13:15:16
 */
import styles from "./index.module.less";
export default function Footer() {
  function CopyRight() {
    return <p>©2021 -2023 doublelab</p>;
  }
  return (
    <div className={styles.Footer}>
      <div>
        <img src="/img/common/double-icon.png" alt={"double lab icon"} />
      </div>
      <CopyRight />
    </div>
  );
}
