

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      videos: [],      
      video: null,
    };

  }



  componentDidMount() {
    this.getVideos('react tutorials');
  }

  getVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        video: videos[0]
      })
    );
  }     


  onClickHandle(video) {
    this.setState({
      video: video
    });
  }

  render() {
    return (
      <div>
        <Nav handleInputVideo={this.getVideos.bind(this)}/>
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




























