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
      postId={"1"}
      haus={"haus/fashion"}
      user={"@teaInParis"}
      title={"I love these vlogs so much! WHAT EVERYONE IS WEARING IN NEW YORK | FALL TRENDS 2019 | KarenBritChick"}
      src={"https://www.youtube.com/embed/IUP1Lp9WQzw"}
    />
    <PostPreview
      haus={"haus/skincare"}
      user={"@makeupAndCurls"}
      title={"Getting my skincare together starting this weekend.  It's time."}
      src={"https://www.youtube.com/embed/wpkqahzyeek"}
    />
    <PostPreview
      haus={"haus/architecture"}
      user={"@howardGirl"}
      title={"I'm studying all weekend instead of going out so I can one day have a home like this."}
      src={"https://www.youtube.com/embed/RDn0K9UzCpc"}
    />
    <PostPreview
      haus={"haus/fashion"}
      user={"@teaInParis"}
      title={"Chanel Spring Summer 2020"}
      src={"https://www.youtube.com/embed/BGrY85i-skk"}
    />
    <PostPreview
      haus={"haus/mua"}
      user={"@makeupAndCurls"}
      title={"EVERYDAY MAKEUP ROUTINE 2019 | NATURAL GLAM | HIGHLOWLUXXE"}
      scr={"https://www.youtube.com/embed/wPpKFeIgDCI"}
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
