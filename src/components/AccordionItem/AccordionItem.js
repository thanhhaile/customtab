import React from 'react';
import classnames from 'classnames';

import style from './AccordionItem.module.css';

const AccordionItem = (props) => {

  console.log('accor', props);
  const { content, label, onClick, isOpen } = props;

  return (
    <>
      <div 
        className={classnames(style.accordionLabel, {
          [style.activeAccordion] : isOpen
        })} 
        onClick={(label) => onClick(label)}
      >
        {isOpen ? <>&#9660; </> : <>&#x25B6; </>}
        {label}
      </div>
      <div className={classnames(style.accordionContent, {
        [style.open] : isOpen
      })}>
        {content}
      </div>
    </>
  )
}

export default AccordionItem;