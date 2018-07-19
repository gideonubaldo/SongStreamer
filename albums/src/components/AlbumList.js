//the component is a component from react
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


// class has for flexibility and functions.
// For instance, it knows when it gets rendered and gets removed from the screen
// setstate function re renders(the function from the albumlist) the albumlist to the app
// class state is the only thing with setState
class AlbumList extends Component { 
  state = { albums: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));

    // this is putting a breakpoint
    // debugger;
  }
  // the .map produces an array. the album part produce one item from that array
  // the map iterated all of the album(this is like a loop thingy)
  // the album could just be a prop
  // the album on the left is just a label and it doens't have to be the same thing 
  // as the value on the right
  // AlbumDetail acts as a class and the key as well as the album act as properties
  renderAlbums() {
     return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
      );
  }

  render() {
    console.log(this.state);
    return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView> 
      );
  }
}

export default AlbumList;