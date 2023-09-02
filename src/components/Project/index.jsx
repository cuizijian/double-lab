import styles from "./index.module.less";
import { Button } from "antd";
export default function Project(props) {
  const {
    name,
    description,
    image,
    artists,
    link,
    marketplace,
    description2,
    bottom,
  } = props;

  return (
    <div className={styles.Project}>
      <div className={styles.Top}>
        <div className={styles.name}>{name}</div>
        <div className={styles.Marketplace}>
          <a href={marketplace} target="_blank">
            <img src="/img/common/opensea.svg" />
          </a>
        </div>
      </div>
      <div className="clearfix">
        <div className={styles.Left}>
          <div className={styles.description}>{description}</div>
          <div className={styles.artists}>{artists}</div>
          <div>
            <a href={link} target="_blank">
              <Button className={styles.viewButton}>View Detail</Button>
            </a>
          </div>
          <p className={styles.description2}>{description2}</p>
        </div>
        <div className={styles.Right}>
          <img src={image} />
          <div className={styles.Bottom}>{bottom}</div>
        </div>
      </div>
    </div>
  );
}
