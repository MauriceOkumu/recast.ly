// var App = () => (
//  <div>
//    <Nav />
//    <div className="col-md-7">
//      <VideoPlayer />
//    </div>
//    <div className="col-md-5">
//      <VideoList/>
//    </div>
//  </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData,
    };

  }

  onClickHandle(video) {
    this.setState({
      video: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
      <div className="col-md-5">
        <VideoList onClickHandle={this.onClickHandle.bind(this)} videos={this.state.videos}/>
      </div>
     </div>
    );
  }
}


window.App = App;




























