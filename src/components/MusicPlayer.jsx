import React from 'react';
import { connect } from 'react-redux';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
  }
  componentWillUnMount() {
    this.audio = null;
  }
  render() {
    return (
      <div>
        <audio
          ref={(audio) => { this.audio = audio; }}
          src={this.props.songUrl}
        />
        <span
          onClick={() => {
            if (this.state.play) {
              this.audio.pause()
              this.props.addActivity(`Song ${this.props.song} Paused`);
              this.setState({ play: false });
            } else {
              this.audio.play();
              this.props.addActivity(`Song ${this.props.song} Played`);
              this.setState({ play: true });
            }
          }}
        >
          {this.state.play ? <i className="fa fa-pause">Pause</i> :
            <i className="fa fa-play">Play</i>}
        </span>
        &nbsp;
        <a
          href={this.props.songUrl}
          download
          onClick={() => {
            this.audio.play();
            this.props.addActivity(`Song ${this.props.song} Downloaded`);
          }}
        >
          <i className="fa fa-download" >
            Download
          </i>
        </a>
      </div>
    );
  }

}

MusicPlayer.propTypes = {
  songUrl: React.PropTypes.string.isRequired,
  song: React.PropTypes.string.isRequired,
  addActivity: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addActivity: (value) => {
      dispatch({ type: 'ADD_EVENT', event: value });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    activity: state,
  };
};

export default MusicPlayer = connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
