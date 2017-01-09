
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: ''
    };
  }

  handleInputVideo(e) {
    this.props.handleSearch(e.target.value);
    this.setState({
      video: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.video}
          onChange={this.handleInputVideo.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}


window.Search = Search;









































