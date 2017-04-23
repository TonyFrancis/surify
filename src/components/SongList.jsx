import React from 'react';
import { Link } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import { getApi } from '../commons';
import API_URL from '../urls';
import SongItem from './SongItem';

export default class SongList extends React.Component {
  // Listing Page for all the songs.

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loader: false,
      songName: ''
    };
  }
  componentWillMount() {
    // Getting the songs for web server.
    this.setState({ loader: true });
    getApi(API_URL.songList, {}, (res) => {
      this.setState({ list: res, loader: false });
    });
  }
  render() {
    if (this.state.loader) {
      return (
        <CircularProgress size={80} thickness={5} />
      );
    }
    return (
      <div>
        <Link to="/activity">Activity</Link>
        <br />
        <TextField
          floatingLabelText="Song"
          onChange={(_, value) => this.setState({ songName: value })}
        />
        <br />
        {this.state.list.map((elem, index) => {
          if (elem.song.toLowerCase().indexOf(this.state.songName.toLowerCase())
            !== -1) {
            return (
              <SongItem
                key={index}
                song={elem.song}
                avatar={elem.cover_image}
                artists={elem.artists}
                songUrl={elem.url}
              />
            );
          }
        })}
      </div>
    );
  }
}
