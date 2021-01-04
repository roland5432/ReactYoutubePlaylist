import React from 'react';
import SearchBar from './SearchBarComponent';
import youtube from '../apis/youtube';
import VideoList from './VideoListComponent';
import VideoDetail from './VideoDetailComponent';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
  };
  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '1em'}}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className="ui row">
          <div className="eleven wide Column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
