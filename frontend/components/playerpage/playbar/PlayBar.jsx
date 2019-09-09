import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class PlayBar extends React.Component {
  constructor(props) {
    super(props);

    this.updateProgress = this.updateProgress.bind(this);
    this.toggleRandom = this.toggleRandom.bind(this);
    this.toggleLooping = this.toggleLooping.bind(this);
    this.resumeSong = this.resumeSong.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMoveVolume = this.mouseMoveVolume.bind(this);
    this.mouseDownVolume = this.mouseDownVolume.bind(this);
    this.mouseUpVolume = this.mouseUpVolume.bind(this);
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
       value = (100 / audio.duration) * audio.currentTime;
       let minutes = Math.floor(audio.currentTime/60);
       let seconds = Math.floor(audio.currentTime%60);
       currTime.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    let handle = document.getElementById('handle');
    progress.style.width = value + "%";
    handle.style.left = progress.style.width;
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

  mouseMove(e) {
    let audio = document.getElementsByClassName('react-audio-player')[0];
    if (!audio.duration) return;
    let progressBar = document.getElementById('progressBar');
    let progressWidth = e.pageX - progressBar.offsetLeft;

    if (progressWidth >= 0 && progressWidth <= progressBar.offsetWidth) {
      audio.currentTime = progressWidth/progressBar.offsetWidth * audio.duration;
    } else if (progressWidth < 0) {
      audio.currentTime = 0;
    } else if (progressWidth > progressBar.offsetWidth) {
      audio.currentTime = audio.duration;
    }
  }

  mouseDown(e) {
    let audio = document.getElementsByClassName('react-audio-player')[0];
    audio.pause();
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  }

  mouseUp(e) {
    let audio = document.getElementsByClassName('react-audio-player')[0];
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
    audio.play();
  }

  mouseMoveVolume(e) {
    let audio = document.getElementsByClassName('react-audio-player')[0];
    let volumeBar = document.getElementById('volumeBar');
    let volume = document.getElementById('volume');
    let volumeHandle = document.getElementById('volumeHandle');
    let volumeWidth = e.pageX - volumeBar.offsetLeft;

    if (volumeWidth >= 0 && volumeWidth <= volumeBar.offsetWidth) {
      this.props.setVolume(volumeWidth/volumeBar.offsetWidth);
      volume.style.width = 100*volumeWidth/volumeBar.offsetWidth + '%';
      volumeHandle.style.left = volumeWidth + 'px';
    } else if (volumeWidth < 0) {
      this.props.setVolume(0);
      volume.style.width = '0%';
      volumeHandle.style.left = '0px';
    } else if (volumeWidth > volumeBar.offsetWidth) {
      this.props.setVolume(1);
      volume.style.width = '100%';
      volumeHandle.style.left = volumeBar.offsetWidth + 'px';
    }
    
  }

  mouseDownVolume(e) {
    window.addEventListener('mousemove', this.mouseMoveVolume);
    window.addEventListener('mouseup', this.mouseUpVolume);
  }

  mouseUpVolume(e) {
    window.removeEventListener('mousemove', this.mouseMoveVolume);
    window.removeEventListener('mouseup', this.mouseUpVolume);
  }

  render() {
    let {currentSong, isPlaying, currentAlbum, currentPlaylist, currentIndex, playbar: {isLooping}, playbar: {isRandom}, playedIndices} = this.props;
    let albumCover = currentAlbum ? currentAlbum.coverUrl : null;
    return (
      <div className='player-playbar-container'>
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
            <i className="fa fa-step-backward small-icon" aria-hidden="true" onClick={() => this.props.prevSong({prevIndices: playedIndices, songs: currentPlaylist, isPlaying})}/>
            <i className={`fa fa-play-circle-o ${isPlaying ? 'hidden' : null}`} aria-hidden="true" onClick={this.resumeSong}/>
            <i className={`fa fa-pause-circle-o ${isPlaying ? null : `hidden`}`} aria-hidden="true" onClick={this.props.pauseSong}/>
            <i className='fa fa-step-forward small-icon' aria-hidden="true" onClick={() => this.props.nextSong({songs: currentPlaylist, index: currentIndex, looping: isLooping, random: isRandom, isPlaying: this.props.isPlaying})}/>
            <i className={`fa fa-repeat small-icon ${isLooping ? 'green' : null}`} aria-hidden="true" onClick={this.toggleLooping}></i>
          </div>
          <div className='playbar-time-info'>
            <div id='song-current-time'>
              0:00
            </div>
            <div id='progressBar' onClick={this.mouseMove}>
              <span id='progress' onMouseDown={this.mouseDown}>
              </span>
              <div id='handle' onMouseDown={this.mouseDown}>
              </div>
            </div>
            <div id='song-duration'>
              0:00
            </div>
            <ReactAudioPlayer volume={this.props.volume} onEnded={() => this.props.nextSong({songs: currentPlaylist, index: currentIndex, looping: isLooping, random: isRandom, isPlaying: this.props.isPlaying})}/>  
          </div>
        </div>
        <div className={'playbar-controls'}>
          <i className="fa fa-volume-off fa_custom"></i>
          <div id='volumeBar' onClick={this.mouseMoveVolume}>
            <span id='volume' onMouseDown={this.mouseDownVolume}>
            </span>
            <div id='volumeHandle' onMouseDown={this.mouseDownVolume}>
            </div>
          </div>
          <i className="fa fa-volume-up fa_custom"></i>
        </div>
      </div>
    )
  }
}

export default PlayBar;