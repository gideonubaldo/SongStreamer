// this is the making of our header
// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles; // this is importing the css 
  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};
// this is the CSS thingy
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',

  },
  textStyle: {
    fontSize: 20,
  }
};
// justifycontent is vertical alignment
// alignitems is horizontal alignment


// Make the component available to the other parts of the app
export default Header;
