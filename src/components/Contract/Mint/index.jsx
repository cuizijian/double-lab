import abi from "@/consts/ABIs/saleABI.json";
import { Button } from "antd";
import { ethers } from "ethers";
import * as React from "react";
import { useState } from "react";
import {
  useContractWrite, usePrepareContractWrite, useWaitForTransaction
} from "wagmi";
import styles from "./index.module.less";
export function MintNFT() {
  const [mintAmount, setMintAmount] = useState(2);
  const { config } = usePrepareContractWrite({
    address: "0x34bb281cfa125446310b2e4aef2b0de625b2c105",
    abi,
    functionName: "publicMint",
    args: [mintAmount],
    overrides: {
      value: ethers.utils.parseEther("0.1").mul(mintAmount),
      gasLimit: 1000000,
    },
  });
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <Button
      className={styles.MintBtn}
      disabled={!write || isLoading}
      onClick={() => write()}
    >
      {isLoading ? "Minting..." : "Mint Now"}
    </Button>
    // {isSuccess && (
    //   <div>
    //     Successfully minted your NFT!
    //     <div>
    //       <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
    //     </div>
    //   </div>
    // )}
  );
}
