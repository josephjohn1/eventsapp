import React from 'react';
import {View,Text,StyleSheet,Dimensions,FlatList} from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';

const propTypes={
    title:PropTypes.string,
    content:PropTypes.object,
  };
class List extends React.PureComponent {
    
    render() {
        const{navigation,title,content}=this.props
        return (
            <View style={styles.list}>
            <View>
            <Text style={styles.text}>{title}</Text>
            </View>
            <FlatList
          data={content}
          horizontal={true}
          renderItem={({item}) => <Card navigation={navigation} item={item}></Card>}></FlatList>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        paddingBottom: 20

    },
    list:{
        marginTop:25,
        borderRadius: 20,
    },
})
List.propTypes=propTypes;
export default List;