import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { COUNTER_ABI, COUNTER_ADDRESS } from "../constant";

function CounterDec() {
  const { library, account } = useWeb3React();

  const dec = () => {
    const signer = library?.getSigner(account).connectUnchecked();
    const counterContract = new ethers.Contract(
      COUNTER_ADDRESS,
      COUNTER_ABI,
      signer
    );
    counterContract.dec().then((result) => {});
  };
  return <button onClick={dec}>Dec</button>;
}

export default CounterDec;
