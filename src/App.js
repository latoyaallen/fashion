import React from 'react';
import LivingRoom from './components/LivingRoom'

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {category: 'pamper'};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({category: e});
    console.log(this.state);
  }

  render() {
    return (
      <LivingRoom
        handleClick={this.handleClick}
        category={this.state.category}
      />
    );
  }
}

export default App;
