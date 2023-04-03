import React from "react";
import Header from "./Header";
import Fotter from "./Fotter";

export default function Layoute({ children , datas }) {
  return (
    <>
      <Header  />
      <div>{children}</div>
      
      <Fotter datas={datas} />
    </>
  );
}
