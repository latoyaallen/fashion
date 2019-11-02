import React from 'react';
import LivingRoom from './components/LivingRoom'
import fallStyle from './data/fallStyle';

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {category: 'pamper', fallStyleCount: 0};

    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleClick(e) {
    this.setState({category: e});
  }

  handleNext(e) {
    if(this.state.category === 'fallStyle') {
      const length = fallStyle.length;
      const fallStyleCount = this.state.fallStyleCount;
      if(fallStyleCount === length - 2) {
        console.log(this.state.fallStyleCount);
        this.setState({fallStyleCount: 0});
      }
      if(fallStyleCount <= length - 1) {
        this.setState({fallStyleCount: fallStyleCount + 1});
      }
    }
  }

  render() {
    return (
      <LivingRoom
        handleClick={this.handleClick}
        handleNext={this.handleNext}
        category={this.state.category}
        count={this.state.fallStyleCount}
      />
    );
  }
}

export default App;
