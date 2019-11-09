import React from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Video from './components/Video'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'home', id: "0"};
    this.handleVideo = this.handleVideo.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleVideo(id) {
    window.location.assign(`/video/${id}`)
    this.setState({view: 'video'});
    this.setState({id: id});
  }

  handleHome() {
    window.location.assign(`/`)
    this.setState({view: 'home'});
  }

  componentDidMount() {
    const pathname = window.location.pathname.substring(1,6);
    if(pathname === 'video') {
      this.setState({view: 'video'});
    } else {
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
          id={this.state.id}
        />
    }

    return (
      <div>
        <Header
          handleHome={this.handleHome}
        />
        {view}
      </div>
    );
  }
}

export default App;
