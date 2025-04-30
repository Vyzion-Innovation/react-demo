import React from "react";

function HeadingComponent(props) {
  return <h5 className={props.classname}>{props.headingName}</h5>;
}

export default HeadingComponent;
