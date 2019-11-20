import React from "react";
import classnames from "classnames";

import style from "./TabItem.module.css";

const TabItem = props => {

  console.log(props);

  return (
    <div
      className={classnames(
        { [style.tabItem]: !props.active },
        {
          [style.tabItemActive]: props.active
        }
      )}
      onClick={() => props.onClick(props.label)}
    >
      <span>{props.label}</span>
    </div>
  );
};

// const TabItem = props => {

//   console.log(props);

//   return (
//     <div
//       className={classnames(
//         { [props.customStyle.tabItem || style.tabItem]: !props.active },
//         {
//           [props.customStyle.tabItemActive || style.tabItemActive]: props.active
//         }
//       )}
//       onClick={() => props.onClick(props.label)}
//     >
//       <span>{props.label}</span>
//     </div>
//   );
// };

export default TabItem;
