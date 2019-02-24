import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';

import NewsArticleIndex from './frontend/news_articles/news_articles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NewsArticleIndex />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
