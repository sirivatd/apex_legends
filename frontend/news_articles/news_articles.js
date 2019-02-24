import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';


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
        let url =asdasdadas
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
            <Text style={styles.titleText}>Latest News</Text>
           <ScrollView>
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
      titleText: {
        fontSize: 30,
        marginTop: 50,
        marginBottom: 5
      },
      article: {
        height: 150,
        width: 330,
        backgroundColor: '#FFF', 
        marginBottom: 10, 
        borderRadius: 10
      },
    });