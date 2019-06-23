import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class PlayBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleRandom = this.toggleRandom.bind(this);
    this.toggleLooping = this.toggleLooping.bind(this);
    this.resumeSong = this.resumeSong.bind(this);
  }

  componentDidMount() {
    this.props.getAlbums();
    let audio = document.getElementsByClassName('react-audio-player')[0];
    audio.addEventListener('timeupdate', this.updateProgress, false);
  }

  updateProgress() {
    var progress = document.getElementById("progress");
    var currTime = document.getElementById('song-current-time')
    var value = 0;
    let audio = document.getElementsByClassName('react-audio-player')[0];
    if (audio.currentTime > 0) {
       value = Math.floor((100 / audio.duration) * audio.currentTime);
       let minutes = Math.floor(audio.currentTime/60);
       let seconds = Math.floor(audio.currentTime%60);
       currTime.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    progress.style.width = value + "%";
 }

  toggleRandom() {
    this.props.toggleRandom(this.props.playbar.isRandom);
  }

  toggleLooping() {
    this.props.toggleLooping(this.props.playbar.isLooping);
  }

  resumeSong() {
    this.props.resumeSong({isPlaying: this.props.isPlaying, currentSong: this.props.currentSong});
  }

  render() {
    let {currentSong, isPlaying, currentAlbum, currentPlaylist, currentIndex, playbar: {isLooping}, playbar: {isRandom}} = this.props;
    let albumCover = currentAlbum ? currentAlbum.coverUrl : null;
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
            <i className={`fa fa-random small-icon ${isRandom ? 'green' : null}`}  aria-hidden="true" onClick={this.toggleRandom}></i>
            <i className="fa fa-step-backward small-icon" aria-hidden="true" onClick={() => this.props.prevSong()}/>
            <i className={`fa fa-play-circle-o ${isPlaying ? 'hidden' : null}`} aria-hidden="true" onClick={this.resumeSong}/>
            <i className={`fa fa-pause-circle-o ${isPlaying ? null : `hidden`}`} aria-hidden="true" onClick={this.props.pauseSong}/>
            <i className="fa fa-step-forward small-icon" aria-hidden="true" onClick={() => this.props.nextSong({songs: currentPlaylist, index: currentIndex, looping: isLooping, random: isRandom, isPlaying: this.props.isPlaying})}/>
            <i className={`fa fa-repeat small-icon ${isLooping ? 'green' : null}`} aria-hidden="true" onClick={this.toggleLooping}></i>
          </div>
          <div className='playbar-time-info'>
            <div id='song-current-time'>
              0:00
            </div>
            <div id="progressBar">
              <span id="progress">
              </span>
            </div>
            <div id='song-duration'>
              0:00
            </div>
            <ReactAudioPlayer />  
          </div>
        </div>
        <div className={'playbar-controls'}>

        </div>
      </div>
    )
  }
}

export default PlayBar;