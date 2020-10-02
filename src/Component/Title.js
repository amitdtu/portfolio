import React from "react";

export default function Title(props) {
  return (
    <div className=" mb-12 text-center title">
      <h1 className="text-5xl font-medium title-font ">{props.children}</h1>
    </div>
  );
}
