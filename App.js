import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer, DrawerItems, DrawerNavigator } from "react-navigation";

import NewsArticleIndex from './frontend/news_articles/news_articles';
import PlayersIndex from './frontend/leaderboard/players_index';
import Header from './frontend/header/header';

const AppNavigator = createDrawerNavigator(
  {
  Home: NewsArticleIndex,
  Leaderboard: PlayersIndex,
  },
  {
    initialRouteName: "Home",
     defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    contentComponent: (props) => (
      <View>
        <Text>Custom Header</Text>
        <DrawerItems {...props} />
        <Text>Custom Footer</Text>
      </View>
    )
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

