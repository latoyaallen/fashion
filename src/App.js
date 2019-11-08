import React from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Video from './components/Video'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'home'};
    this.handleVideo = this.handleVideo.bind(this);
  }

  handleVideo(id) {
    window.open(`/video/${id}`, '_blank');
    this.setState({view: 'video'});
  }

  componentDidMount() {
    const pathname = window.location.pathname.substring(1,6);
    if(pathname === 'video') {
      this.setState({view: 'video'});
    }
    if(pathname === '/') {
      this.setState({view: 'home'});
    }
  }

  render() {
    let view;

    if(this.state.view === 'home') {
      view =
        <Body
          handleVideo={this.handleVideo}
        />
    }

    if(this.state.view === 'video') {
      view =
      <Video
          handleVideo={this.handleVideo}
        />
    }

    return (
      <div>
        <Header />
        {view}
        <Footer />
      </div>
    );
  }
}

export default App;
