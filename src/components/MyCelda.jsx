import React from "react";

export const MyCelda = ({ isLive }) => {
  return (
    <div
      className={`${isLive === 1 ? "bg-slate-100" : "bg-black"} w-8 h-8`}
    ></div>
  );
};
