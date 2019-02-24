import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'https://img.icons8.com/color/48/000000/squared-menu.png'}} style={styles.menuIcon} />
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#f4511e',
      tintColor: '#fff',
      height: 110,
      justifyContent: 'flex-end',
      alignItems: 'center',
      elevation:4,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "grey",
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold',
        color: '#FFF',
    },
    menuIcon: {
        width: 35,
        height: 35,
        position: 'absolute',
        left: 15,
        bottom: 11,
        tintColor: '#FFF',
    }
})