import React from 'react';
import LivingRoom from './components/LivingRoom'
import fallStyle from './data/fallStyle';

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {category: 'vintage'};

    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleClick(e) {
    this.setState({category: e});
  }

  handleNext(e) {
    console.log("coming soon");
  }

  handlePrevious(e) {
    console.log("coming soon");
  }

  render() {
    return (
      <LivingRoom
        handleClick={this.handleClick}
        handleNext={this.handleNext}
        handlePrevious={this.handlePrevious}
        category={this.state.category}
        count={this.state.fallStyleCount}
      />
    );
  }
}

export default App;
