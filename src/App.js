import React from 'react';
import LivingRoom from './components/LivingRoom'

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
  }

  handlePrevious(e) {
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
