import React, { useState } from "react";

import TabItem from "../TabItem/TabItem";
import AccordionItem from "../AccordionItem/AccordionItem";

import customLayout from "./customLayout.module.css";
import style from "./TabList.module.css";

const TabList = props => {
  const { customStyleTabs, children, tabLayout, displayType } = props;

  // console.log(children);
  console.log("tabbbbbbb", props);
  
  let index = 0;
  for (let i = 0; i < children.length; i++) {
    if (!children[i].props.children[0].props.disable) {
      index = i;
      break;
    }
  }
  const [activeTab, setActiveTab] = useState(children[index].props.children[0]);

  const [openAccordion, setOpenAccordion] = useState(
    children[0].props.children[0]
  );

  const changeOpenAccordion = label => {
    setOpenAccordion(label);
  };

  const changeActive = label => {
    setActiveTab(label);
  };

  if (displayType === "tabs") {
    return (
      <div className={style.tabContainer}>
        <div className={`${style.tabLayout} ${customLayout[tabLayout]}`}>
          <div className={style.tabMenu}>
            {children.map(el => {
              return (
                <TabItem
                  key={el.props.children[0].props.children}
                  label={el.props.children[0].props.children}
                  customStyleTab={customStyleTabs}
                  active={activeTab === el.props.children[0] ? true : false}
                  disable={el.props.children[0].props.disable}
                  onClick={() => changeActive(el.props.children[0])}
                />
              );
            })}
          </div>
          <div className={style.tabContent}>
            {children.map(el => {
              if (el.props.children[0] === activeTab) {
                const content = el.props.children.slice(
                  1,
                  el.props.children.length
                );
                return content;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else if (displayType === "accordion") {
    return (
      <div className={`${style.accordionContainer}`}>
        <div className={style.accordionMenu}>
          {children.map(el => {
            const { children } = el.props;
            return (
              <AccordionItem
                key={children[0].props.children}
                label={children[0].props.children}
                isOpen={openAccordion === children[0] ? 1 : 0}
                onClick={() => changeOpenAccordion(children[0])}
                content={children.slice(1, children.length)}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default TabList;
