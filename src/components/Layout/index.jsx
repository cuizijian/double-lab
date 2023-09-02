import { Outlet } from "react-router-dom";
import styles from "./index.module.less";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SubHeader from "@components/SubHeader";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, bsc } from "wagmi/chains";

export default function Layout() {
  const chains = [arbitrum, mainnet, polygon, bsc];
  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: "26153c04ddd5cc3ce0025c2930cf322c" }),
  ]);
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: "web3Modal", chains }),
    provider,
  });

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
    <>
      <Header />
      <SubHeader />
      <WagmiConfig client={wagmiClient}>
        <div className={styles.layout}>
          <Outlet />
        </div>
      </WagmiConfig>
      <Web3Modal
        projectId="26153c04ddd5cc3ce0025c2930cf322c"
        ethereumClient={ethereumClient}
      />
      <Footer />
    </>
  );
}
