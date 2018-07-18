import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


// Card renders all its children. so for this one, it renders 
// <text> and the variables in it. Needless to say it needs to be able to process them. 
const AlbumDetail = ({ album }) => {
  // this const is saying: I want my title,my thumbnail_image, and artst from album; des-structuring
  // so we dont have to do the dot thingy such as album.image. we could just call image itself
  const { title, 
    thumbnail_image,
    artist,
    image
    } = album;
  const { 
   thumbnailsStyle,
   headerContentStyle,
   thumbnailContainerStyle,
   headerTextStyle,
   imageStyle
  } = styles;

  return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image 
            style={thumbnailsStyle}
            source={{ uri: thumbnail_image }}
            />
          </View>
          <View style={headerContentStyle}> 
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        
        <CardSection>
          <Image 
          style={imageStyle}
          source={{ uri: image }} 
          />
        </CardSection>
        
        <CardSection>
          <Button />
        </CardSection>
      
      </Card>
    );
};

// headerContentStyle is an arbitrary name 
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 30,
  },
  thumbnailsStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
