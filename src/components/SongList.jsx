import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { getApi } from '../commons';
import API_URL from '../urls';
// import SongItem from './SongItem';

export default class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loader: false,
    };
  }
  componentWillMount() {
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
        {this.state.list.map((elem, index) =>
          <li key={index}>
            {elem.song}
          </li>
        )}
      </div>
    );
  }
}
