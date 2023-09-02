import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { Button } from "antd";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { MintNFT } from "@/components/Contract/Mint";
export default function Wallet() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const { disconnect } = useDisconnect();

  function ManualConnect() {
    return isConnected ? (
      <div>
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector?.name}</div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    ) : (
      <div>
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {!connector.ready && " (unsupported)"}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              " (connecting)"}
          </button>
        ))}

        {error && <div>{error.message}</div>}
      </div>
    );
  }

  return (
    <>
      <Web3Button /> {/*<MintNFT />*/}
      {/*<Web3NetworkSwitch />*/}
      {/*<ManualConnect />*/}
    </>
  );
}
