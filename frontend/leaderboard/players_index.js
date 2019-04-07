import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';
import Header from './../header/header';
export default class PlayersIndex extends React.Component {
    static navigationOptions = {
        title: 'Leaderboard',
      };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Header title="Leaderboard" toggleMenu={() => this.props.navigation.toggleDrawer()} />
                <Text>This is the leaderboard</Text>
            </View>
        );
    }
}