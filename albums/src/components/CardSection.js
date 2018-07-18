import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    );
};
// flex direction tells what is the orientation of elements in a container, may it be row or column
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row', 
    borderColor: '#ddd',
    position: 'relative',
  }
};

export default CardSection;