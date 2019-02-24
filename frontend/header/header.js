import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this.props.toggleMenu()} style={styles.menuIconWrapper}>
                    <Image source={{uri: 'https://img.icons8.com/color/48/000000/squared-menu.png'}} style={styles.menuIcon} />
                </TouchableHighlight>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
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
    menuIconWrapper: {
        position: 'absolute',
        left: 15,
        bottom: 11,
    },
    menuIcon: {
        width: 35,
        height: 35,
        tintColor: '#FFF',
    }
})

export default withNavigation(Header);