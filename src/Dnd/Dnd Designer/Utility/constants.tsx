import React from 'react';
import { SIDEBAR_ITEM } from './constants';
import shortid from 'shortid';
import ApiIcon from '@mui/icons-material/Api';

//Import component here
import AboutScreenComponent from "Dnd/Draggable Components/Previous_Components/GeneratedComponent/AboutScreenComponent";
import DevExperienceAboutComponent from "Dnd/Draggable Components/Previous_Components/GeneratedComponent/DevExperienceAboutComponent";

export const renderComponent = (type, config) => {
  switch (type) {
//Import switch case here
  case "AboutScreenComponent":
    return <AboutScreenComponent  config={config} />;
    break;
  case "DevExperienceAboutComponent":
    return <DevExperienceAboutComponent  config={config} />;
    break;
    default:
      return null;
  }
};

export const SIDEBAR_ITEMS = [
//Import new sidebar items
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "AboutScreenComponent",
      content: AboutScreenComponent,
      icon: <ApiIcon className="dnd sidebarIcon" />,
      component_name: "AboutScreenComponent",
      icon_name: "ApiIcon",
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "DevExperienceAboutComponent",
      content: DevExperienceAboutComponent,
      icon: <ApiIcon className="dnd sidebarIcon" />,
      component_name: "DevExperienceAboutComponent",
      icon_name: "ApiIcon",
    },
  },
];
