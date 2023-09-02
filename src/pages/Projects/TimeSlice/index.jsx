/*
 * @Descripttion: 
 * @Author: 崔子健
 * @Date: 2023-02-22 19:48:35
 * @LastEditors: 崔子健
 * @LastEditTime: 2023-04-13 16:49:24
 */
import { artWorksImgList } from "@/consts/artWorksImgList";
import { MintNFT } from "@components/Contract/Mint";
import Wallet from "@components/Wallet";
import detailStyles from "../index.module.less";

export default function TimeSlice() {
  function Top() {
    return (
      <div className={`${detailStyles.Top} clearfix`}>
        <h1>
          Time Slice 103
          <div className={detailStyles.WalletBtn}>
            <Wallet />
          </div>
        </h1>
      </div>
    );
  }
  return (
    <div className={detailStyles.ProjectDetail}>
      <Top />
      <div className={detailStyles.Banner}>
        <img src="/img/timeslice/banner.png" />
      </div>
      <div className={detailStyles.BtnWrap}>
        <MintNFT />
      </div>
      <section>
        <h2>About Project</h2>
        <p className={detailStyles.Content}>
          It all began in unit 103, where I used to live. The wall I was facing
          when I did jump rope bore the traces of time. If I stared at it long
          enough, I could enter another world—demons, monsters, people, god,
          immortals were all there. I used ink and water to transfer those
          traces onto paper, then into my computer. Now they are strings of 1s
          and 0s, drifting in the ripples of energy, rising, every night,
          tirelessly.{" "}
        </p>
      </section>
      <section>
        <h2>Artist：ARMOTOR</h2>
        <p className={detailStyles.Content}>
          "Everything I painted, I had seen with my own eyes."
        </p>
      </section>
      <section>
        <div className={detailStyles.ModuleTop}>
          <div>
            <h2>Artworks</h2>
          </div>
          <div className={detailStyles.Marketplace}>
            <a href="https://opensea.io/collection/cosmochamber" target="_blank">
              <img src="/img/common/opensea.svg" />
            </a>
          </div>
        </div>
        <div className={detailStyles.artWorkList}>
          {artWorksImgList.map(item => {
            return <div className={detailStyles.item} key={item?.key}><img className="img" src={item?.img} /></div>
          })}
        </div>
      </section>
      <section>
        <div className={detailStyles.timeSliceBottom}>
          <img className="img" src="/svg/timeslice/TimeSliceBottom.svg"/>
        </div>
      </section>
    </div>
  );
}
