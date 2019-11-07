import React from 'react';
import Header from './components/Header'
import Body from './components/Body'

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {category: 'lookBooks', count: 0};
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
