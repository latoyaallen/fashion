import React from 'react';
import LivingRoom from './components/LivingRoom'
import lookBooks from './data/lookBooks';
import streetStyle from './data/streetStyle';
import vintage from './data/vintage';
import howTos from './data/howTos';

const numberOfVideos = (category) => {
  if(category === 'streetStyle') {
    return streetStyle.length;
  }
  if(category === 'lookBooks') {
    return lookBooks.length;
  }
  if(category === 'vintage') {
    return vintage.length;
  }
  if(category === 'howTos') {
    return howTos.length;
  }
}

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {category: 'lookBooks', count: 0};

    this.handleCategory = this.handleCategory.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleCategory(e) {
    this.setState({category: e});
    this.setState({count: 0});
  }

  handleNext(e) {
    const n = numberOfVideos(this.state.category)
    const currentVideoCount = this.state.count + 1;
    if(n > currentVideoCount) {
      this.setState({ count: this.state.count + 1});
    }
  }

  handlePrevious(e) {
    if(this.state.count < 0) { // if we are not on the first video
      this.setState({ count: this.state.count - 1});
    }
  }

  render() {
    return (
      <LivingRoom
        handleCategory={this.handleCategory}
        handleNext={this.handleNext}
        handlePrevious={this.handlePrevious}
        category={this.state.category}
        count={this.state.count}
      />
    );
  }
}

export default App;
