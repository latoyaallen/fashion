import React from 'react';
import ContentRow from './ContentRow';
import PopularContentRow from './PopularContentRow';
import lookBooks from '../data/lookBooks';
import vintage from '../data/vintage';
import fashionWeek from '../data/fashionWeek';
import howToStyle from '../data/howToStyle';
import mostPopular from '../data/mostPopular';

const bodyContainer = {
  paddingTop: 100,
}

const Body = (props) => (
  <div style={bodyContainer}>
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
