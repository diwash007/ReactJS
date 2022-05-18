import React from "react";

export default function Row({ guess }) {
  return (
    <div className="row">
      <div>{guess && guess[0].key}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
