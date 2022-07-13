import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import List from './List';
import PropTypes from 'prop-types';

const placeholderImage = require('../assets/images/placeholder.png');


const propTypes={
    item:PropTypes.array,
    
  };

class Card extends React.PureComponent {
  render() {
    const {navigation,item} = this.props;
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('Detail',{movieDetail:item})}
       style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path}
              : placeholderImage
          }></Image>
        {!placeholderImage && <Text style={styles.movieName}></Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  image: {
    height: 180,
    width: 250,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    top: 10,
    textAlign: 'center',
  },
});
Card.propTypes=propTypes;

export default Card;
