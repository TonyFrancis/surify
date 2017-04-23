import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import MusicPlayer from './MusicPlayer';

export default class SongItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      open: false,
    };
  }
  handleOpen() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  handleChange(value) {
    this.setState({ open: value });
  }
  render() {
    return (
      <Card expanded={this.state.open} onExpandChange={this.handleChange}>
        <CardHeader
          title={this.props.song}
          subtitle={this.props.artists}
          avatar={this.props.avatar}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <MusicPlayer
            songUrl={this.props.songUrl}
            song={this.props.song}
          />
        </CardText>
      </Card>
    );
  }
}

SongItem.propTypes = {
  song: React.PropTypes.string.isRequired,
  artists: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string.isRequired,
  songUrl: React.PropTypes.string.isRequired,
};
