
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from "react-native";


const HomeHeader = () => {

    return (

        <View style={styles.container}>


           <Text>Hi Bernald</Text>
                </View>
          

       
    )
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50
    },

    user_photo: {
        width: 50,
        paddingLeft: 10 * 2,
        justifyContent: 'center'

    },

    search_bar_image: {
        flexDirection: 'row',
        width: '85%',
        height: '100%',
      //  backgroundColor: grey.lightGray3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 30,
    },

    search_bar_text: {
       
        flex: 1,
        marginEnd: 16
    },

})