import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class PlayBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    let {currentSong, isPlaying, currentAlbum} = this.props;
    let albumCover = currentAlbum ? currentAlbum.coverUrl : null
    debugger;
    return (
      <div className="player-playbar-container">
        <div className='current-song-info'>
          <img src={albumCover}></img>
          <div>
            { (currentSong) ? <div className={'current-song-title'}>{currentSong.title}</div> : null }
            { (currentSong) ? <div className={'current-song-artist'}>{currentSong.artist}</div> : null }
          </div>
        </div>
        <div className={'player-wrapper'}>
          <div className='main-buttons'>
            <i className="fa fa-step-backward small-icon" aria-hidden="true"/>
            <i className={`fa fa-play-circle-o ${isPlaying ? 'hidden' : null}`} aria-hidden="true" onClick={this.props.resumeSong}/>
            <i className={`fa fa-pause-circle-o ${isPlaying ? null : `hidden`}`} aria-hidden="true" onClick={this.props.pauseSong}/>
            <i className="fa fa-step-forward small-icon" aria-hidden="true" onClick={this.props.nextSong}/>
          </div>
          <div className='meter animate'>
            <span><span></span></span>
          </div>
          <ReactAudioPlayer />    
        </div>
        <div className={'playbar-controls'}>

        </div>
      </div>
    )
  }
}

export default PlayBar;