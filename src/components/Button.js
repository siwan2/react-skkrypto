import React from "react";
export function ConnectButton() {
  return (
    <div>
      <button style={{ color: "white", backgroundColor: "red" }}>
        Connect
      </button>
    </div>
  );
}

export function GreenButton() {
  return (
    <div>
      <button style={{ color: "white", backgroundColor: "green" }}>
        Pending
      </button>
    </div>
  );
}

export function ColorButton(props) {
  return (
    <button style={{ color: "white", backgroundColor: props.backgroundColor }}>
      button
    </button>
  );
}
