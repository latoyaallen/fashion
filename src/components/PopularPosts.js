import React from 'react';
import PostPreview from './PostPreview'

const contentContainer = {
  maxWidth: '500px',
  margin: 'auto',
  background: 'white',
}

const PopularPosts = (props) => (
  <div style={contentContainer}>
    <h1>Popular Posts</h1>
    <PostPreview
      postId={"1"}
      haus={"haus/streetStyle"}
      user={"@teaInParis"}
      title={"WHAT EVERYONE IS WEARING IN NEW YORK | FALL TRENDS 2019 | KarenBritChick"}
      url={"https://www.youtube.com/watch?v=IUP1Lp9WQzw"}
    />
    <PostPreview
      haus={"haus/skincare"}
      user={"@makeupForWOC"}
      title={"What oily skin should look for"}
      url={"https://twitter.com/MakeupForWOC/status/1187702673962917895"}
    />
    <PostPreview
      haus={"haus/luxury"}
      user={"@teaInParis"}
      title={"Chanel Spring Summer 2020"}
      url={"https://www.youtube.com/watch?v=BGrY85i-skk"}
    />
    <PostPreview
      haus={"haus/cozy"}
      user={"@simoneH"}
      title={"I made my living room cozy... what do you think?"}
      url={""}
    />
    <PostPreview
      haus={"haus/mua"}
      user={"@makeupForWOC"}
      title={"My new favorite foundation"}
      url={""}
    />
    <PostPreview
      haus={"haus/art"}
      user={"@adora"}
      title={"My favorite looks from The Met Ball"}
      url={""}
    />
    <PostPreview
      haus={"haus/books"}
      user={"@tiana"}
      title={"What books should I add to my collection?"}
      url={""}
    />
    <PostPreview
      haus={"haus/architecture"}
      user={"@naomi"}
      title={"I study 3 hours after work every day so I can have a home like this"}
      url={""}
    />
  </div>
);


export default PopularPosts;
