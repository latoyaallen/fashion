import React from 'react';
import ContentRow from './ContentRow';
import PopularContentRow from './PopularContentRow';
import lookBooks from '../data/lookBooks';
import vintage from '../data/vintage';
import fashionWeek from '../data/fashionWeek';
import howToStyle from '../data/howToStyle';
import mostPopular from '../data/mostPopular';

const bodyContainer = {
  paddingTop: 5,
}

const seashellBackground = {
  backgroundColor: '#f9f4ee', // seashell
  height: '300px',
  width: 2000,
  zIndex: -1,
  position: 'absolute',
}

const Body = (props) => (
  <div style={bodyContainer}>
    <p style={seashellBackground}></p>
    <ContentRow
      category={lookBooks}
      categoryTitle={"Autum Look Books"}
    />
    <ContentRow
      category={vintage}
      categoryTitle={"Vintage"}
    />
    <PopularContentRow
      category={mostPopular}
    />
    <ContentRow
      category={fashionWeek}
      categoryTitle={"Fashion Week"}
    />
    <ContentRow
      category={howToStyle}
      categoryTitle={"How To Style"}
    />
  </div>
);

export default Body;
