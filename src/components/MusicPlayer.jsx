import React from 'react';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillUnMount() {
    this.audio = null;
  }
  render() {
    console.log("ASdasd")
    return (
      <div>
        <audio
          ref={(audio) => { this.audio = audio; }}
          src={this.props.songUrl}
        />
      <button onClick={ e => this.audio.play()}>play</button>
      <a href={this.props.songUrl} download>download</a>
      </div>
    );
  }

}

MusicPlayer.propTypes = {
  songUrl: React.PropTypes.string.isRequired,
};
