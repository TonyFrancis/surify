import React from 'react';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <audio
          src={this.props.songUrl}
          controls
        />
      </div>
    );
  }

}

MusicPlayer.propTypes = {
  songUrl: React.PropTypes.string.isRequired,
};
