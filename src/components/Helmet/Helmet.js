// for Page title

import React from "react";

const Helmet = (props) => {
  document.title = "Honor of Kings - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
