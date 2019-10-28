import React from 'react';
import PostPreview from './PostPreview'

const contentContainer = {
  maxWidth: '500px',
  margin: 'auto',
  background: 'white',
}

const PopularPosts = (props) => (
  <div style={contentContainer}>
    <h1>Peach.Haus</h1>
    <PostPreview
      haus={"haus/fashion"}
      user={"@teaInParis"}
      title={"My love for New York style captured in one blog:  WHAT EVERYONE IS WEARING IN NEW YORK | FALL TRENDS 2019 | KarenBritChick"}
      src={"https://www.youtube.com/embed/IUP1Lp9WQzw"}
    />
    <PostPreview
      haus={"haus/skincare"}
      user={"@makeupAndCurls"}
      title={"I've been inconsistent with my skincare routine...time to get back on track."}
      src={"https://www.youtube.com/embed/wpkqahzyeek"}
    />
    <PostPreview
      haus={"haus/interiorDesign"}
      user={"@howardGirl"}
      title={"Future me WILL have a home like this.  I'm manifesting it."}
      src={"https://www.youtube.com/embed/RDn0K9UzCpc"}
    />
    <PostPreview
      haus={"haus/fashion"}
      user={"@teaInParis"}
      title={"Dreamy: Chanel Spring Summer 2020"}
      src={"https://www.youtube.com/embed/BGrY85i-skk"}
    />
    <PostPreview
      haus={"haus/makeup"}
      user={"@makeupAndCurls"}
      title={"My 'oops I'm running late again' makeup routine."}
      src={"https://www.youtube.com/embed/V97xTCJFL8g"}
    />
    <PostPreview
      haus={"haus/books"}
      user={"@curlsAndBooks"}
      title={"Rapid Fire Questions with NYT#1 Author Malcolm Gladwell"}
      src={"https://www.youtube.com/embed/PwvNTxeebHA"}
    />
  </div>
);


export default PopularPosts;
