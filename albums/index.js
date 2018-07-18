//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
// the reason why it has to curly braises is because we dont have to bother to make an object out of this.
// flex is to make the scrolling functional. the scrollview is implemented in the albumlist
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
