import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { ethers } from "ethers";
import { COUNTER_ABI, COUNTER_ADDRESS } from "../constant";
///생성자 함수 앞에 new -> 객체 만들어서 넣어줌

function CountGet() {
  const [count, setCount] = useState(0);
  const { library } = useWeb3React();
  const get = () => {
    const counterContract = new ethers.Contract(
      COUNTER_ADDRESS,
      COUNTER_ABI,
      library
    );

    counterContract.get().then((result) => {
      setCount(result.toNumber());
    });
  };

  return (
    <div>
      <button onClick={get}>Get Count</button>
      <div>{count}</div>
    </div>
  );
}
///프로미스 .then 해서 counterContract.get이 끝나면 그다음에 뒤에 것을 실행해줘라
export default CountGet;
