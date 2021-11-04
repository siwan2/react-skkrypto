import { ColorButton, ConnectButton } from "./components/Button";
import CounterInc from "./components/CounterIncrease";
import CounterDec from "./components/CounterDecrease";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "./connector";
import CountGet from "./components/CounterGet";
///대문자여야 컴포넌트로 인식???
function App() {
  const { chainId, account, activate, active } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);
  };

  return (
    <div>
      <div>Chain Id : {chainId}</div>
      <div>Account : {account}</div>
      {active ? (
        <div style={{ color: "yellowgreen" }}>Connected!</div>
      ) : (
        <button onClick={onClick}>connect</button>
      )}
      <CountGet />
      <CounterInc />
      <CounterDec />
    </div>
  );
}

export default App;
