import React from 'react';
import ContentRow from './ContentRow';
import lookBooks from '../data/lookBooks';
import vintage from '../data/vintage';
import fashionWeek from '../data/fashionWeek';

const bodyContainer = {
  paddingTop: 100,
}

const Body = (props) => (
  <div style={bodyContainer}>
    <ContentRow
      category={lookBooks}
      categoryTitle={"Look Books"}
    />
    <ContentRow
      category={vintage}
      categoryTitle={"Vintage"}
    />
    <ContentRow
      category={fashionWeek}
      categoryTitle={"Fashion Week"}
    />
  </div>
);

export default Body;
