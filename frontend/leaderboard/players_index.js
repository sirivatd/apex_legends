import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';

export default class PlayersIndex extends React.Component {
    static navigationOptions = {
        title: 'Leaderboard',
        headerLeft: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
      };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Leaderboard</Text>
            </View>
        );
    }
}