import React from "react";

export default function Title(props) {
  return (
    <div className=" mb-12 text-center title">
      <h1 className="text-5xl font-medium title-font ">
        {props.children}
        {/* <div className="h-1 w-10 bg-indigo-500 rounded mb-6 mx-auto border-bottom" /> */}
      </h1>
    </div>
  );
}
