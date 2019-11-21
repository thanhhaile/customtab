import React from "react";
import classnames from "classnames";

import style from "./TabItem.module.css";

const TabItem = props => {

  const { active, disable, onClick, label } = props;

  return (
    <div
      className={classnames(
        { [style.tabItem]: !active && !disable},
        {
          [style.tabItemActive]: active
        }, 
        {
          [style.disable] : disable
        }
      )}
      onClick={() => {
        if(!disable) onClick(label);
      }}
    >
      <span>{label}</span>
    </div>
  );
};

export default TabItem;
