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
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            {this.state.newsArticles.map(article => {
                return (
                    <View style={styles.article} key={article.title}>
                    <Image style={{borderRadius: 10}} source={{uri: article.urlToImage, width: 150, height: 150}} />
                    <Text style={styles.articleTitle}>{article.title}</Text>
                    <Text style={styles.articleAuthor}>{article.author}</Text>
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
        backgroundColor: '#ececec',
        alignItems: 'center',
        justifyContent: 'center',
      },
      scrollView: {
        marginTop: 120
      },
      header: {
          width: '100%',
          backgroundColor: '#FFF',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: 100,
          marginBottom: 15,
      },
      titleText: {
        fontSize: 30,
        marginBottom: 10
      },
      article: {
        height: 150,
        width: 350,
        backgroundColor: '#FFF', 
        marginBottom: 10, 
        borderRadius: 10,
        justifyContent: 'space-between'
      },
      articleAuthor: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: '#FFF',
          padding: 5,
          borderRadius: 5
      },
      articleTitle: {
          position: 'absolute',
          top: 3,
          left: 160,
          width: 165
      }
    });