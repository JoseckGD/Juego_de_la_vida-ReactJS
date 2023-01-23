import React from "react";

export const MyCelda = ({ isLive }) => {
  return (
    <div
      className={`${isLive === 1 ? "bg-slate-100" : "bg-black"} w-4 h-4`}
    ></div>
  );
};
