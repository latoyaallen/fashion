import React from 'react';
import PostPreview from './components/PostPreview'

const contentContainer = {
  maxWidth: '500px',
  margin: 'auto',
  background: 'white',
}

function App() {
  return (
    <div style={contentContainer}>
      <h1>Popular Posts</h1>
      <PostPreview
        haus={"haus/skincare"}
        user={"@makeupForWOC"}
        title={"What oily skin should look for"}
      />
      <PostPreview
        haus={"haus/luxury"}
        user={"@teaInParis"}
        title={"Chanel Spring Summer 2020"}
      />
      <PostPreview
        haus={"haus/cozy"}
        user={"@simoneH"}
        title={"I made my living room cozy... what do you think?"}
      />
      <PostPreview
        haus={"haus/mua"}
        user={"@makeupForWOC"}
        title={"My new favorite foundation"}
      />
      <PostPreview
        haus={"haus/art"}
        user={"@adora"}
        title={"My favorite looks from The Met Ball"}
      />
      <PostPreview
        haus={"haus/books"}
        user={"@tiana"}
        title={"What books should I add to my collection?"}
      />
      <PostPreview
        haus={"haus/architecture"}
        user={"@naomi"}
        title={"I study 3 hours after work every day so I can have a home like this"}
      />
    </div>
  );
}

export default App;
