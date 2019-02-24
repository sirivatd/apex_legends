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
      <View style={styles.menuContent}>
        <Image source={{uri: 'https://ih0.redbubble.net/image.747403214.6209/flat,550x550,075,f.u1.jpg'}} style={styles.headerLogo} />
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
  },
  menuContent: {
    paddingTop: 70,
    paddingLeft: 20,
  },
  headerLogo: {
    width: 230,
    height: 230,
    marginBottom: 40,
  },
});

