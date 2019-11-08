import React from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: 'lookBooks', count: 0};
    this.handleVideo = this.handleVideo.bind(this);
  }

  handleVideo(id) {
    window.open(`/video/${id}`, '_blank');
  }

  componentDidMount() {
    console.log(window.location.href);
  }

  render() {
    return (
      <div>
        <Header />
        <Body
          handleVideo={this.handleVideo}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
