import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';

import Header from './../header/header';

export default class NewsArticlesIndex extends React.Component {
  static navigationOptions = {
    title: 'Latest News',
  };

  constructor(props) {
    super(props);
    this.state = {
      newsArticles: [],
      newsLoaded: false,
      numArticles: 0
    };
  }

  componentDidMount() {
    // call api to fetch news articles
    let url =
      "https://newsapi.org/v2/everything?" +
      "q=apexlegends&" +
      "apiKey=4ddc19b190b74a96b4b137f0a3e546f9";
    
      fetch(url)
      .then(res => res.json())
      .then((data) => {
      this.setState({newsArticles: data.articles, newsLoaded: true, numArticles: data.totalResults })
        })
      .catch(err => { throw err });
    }
    
    render() {
      const newsLoaded = this.state.numArticles > 0
      return (
        <View style={styles.container}>
          <Header title="Latest News" toggleMenu={() => this.props.navigation.toggleDrawer()} />
          <ScrollView style={styles.scrollView}>
          {this.state.newsArticles.slice(0, 25).map(article => {
            return (
              <View style={styles.article} key={article.title}>
                <Image source={{uri: article.urlToImage, width: 64, height: 64}} />
                <Text>{article.title}</Text>
                <Text>{article.author}</Text>
              </View>
            );
          })}
          </ScrollView>
          <Text>{this.state.numArticles}</Text>
        </View>
      );
    }
  }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        justifyContent: 'center',
      },
      scrollView: {
        marginTop: 120
      },
      article: {
        height: 150,
        width: 330,
        backgroundColor: '#FFF',
        marginTop: 17,
        borderRadius: 10
      },
    });