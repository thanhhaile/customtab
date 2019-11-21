import React from 'react';

import TabList from './components/TabList/TabList';
import TabLabel from './components/TabLabel/TabLabel';

import './App.css';

function App() {
  // console.log(customLayout);
  return (
    <div className="App">

      <TabList  
        displayType='tabs' // tabs or accordion
        tabLayout ='menuBottom'
      >
        <div>
          <TabLabel> <i className="fa fa-android"></i> Tab 1 </TabLabel>
          <h3>đây là headline của tab1</h3>
          <p>Đây là nội dung của tab1</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </p>
        </div>
        
        <div>
          <TabLabel disable>Tab 2 <i className="fa fa-android"></i></TabLabel>
          <h3>đây là headline của tab2</h3>
          <p>Đây là nội dung của tab2</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </p>
        </div>
        
        <div>
          <TabLabel>Tab 3 <i className="fa fa-android"></i></TabLabel>
          <h3>đây là headline của tab3</h3>

          <p>Đây là nội dung của tab3</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </p>
        </div>
        <div>
          <TabLabel>Tab 4 <i className="fa fa-android"></i></TabLabel>
          <h3>đây là headline của tab4</h3>

          <p>Đây là nội dung của tab4</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </p>
        </div>
        
      </TabList>
    </div>
  );
}

export default App;


        // customStyleAccordion={{
        //   accordionLabel: customStyleAccordion.accordionLabel,
        //   accordionContent: customStyleAccordion.accordionContent,
        //   activeAccordion: customStyleAccordion.accordionContent,
        // }}

        // customStyleTabs={{
        //   tabContainer: customStyleTabs.tabContainer,
        //   tabItem: customStyleTabs.tabItem,
        //   tabItemActive: customStyleTabs.tabItemActive,       
        // }}