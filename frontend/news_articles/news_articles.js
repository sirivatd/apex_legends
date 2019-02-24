import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, ScrollView, TouchableOpacity } from 'react-native';


export default class NewsArticlesIndex extends React.Component {
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
            <View style={styles.header}>
                <Text style={styles.titleText}>Latest News</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.newsArticles.slice(0, 25).map(article => {
                return (
                    <TouchableOpacity style={styles.article} key={article.title} onPress={() => Linking.openURL(article.url)}>
                      <Image style={{borderRadius: 10}} source={{uri: article.urlToImage, width: 150, height: 150}} />
                      <Text style={styles.articleTitle}>{article.title}</Text>
                      <Text style={styles.articleAuthor}>{article.author}</Text>
                    </TouchableOpacity>
                );
                })}
            </ScrollView>
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