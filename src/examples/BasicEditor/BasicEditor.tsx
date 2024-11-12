import React from 'react';
import Isoflow, { InitialData } from 'src/Isoflow';
import { isopacks } from '../initialData';

// use https://iotools.cloud/tool/svg-to-base64-encode/ to encode your url
const base64svg =
  'PHN2ZyBoZWlnaHQ9IjEwMCIgd2lkdGg9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIHI9IjQ1IiBjeD0iNTAiIGN5PSI1MCIgZmlsbD0icmVkIiAvPjwvc3ZnPg==';

const initialData: InitialData = {
  title: 'Basic Editor',
  colors: [],
  items: [],
  views: [],
  icons: [
    {
      id: 'icon1',
      name: 'Icon 1',
      url: `data:image/svg+xml;base64,${base64svg}`,
      collection: 'Custom',
      isIsometric: false // set this to true to when using an isometric icon
    },
    ...isopacks
  ]
};

export const BasicEditor = () => {
  return <Isoflow initialData={{ ...initialData, fitToView: true }} />;
};
