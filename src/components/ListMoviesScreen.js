import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from 'react-native-paper';

import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/General';
import {customColors} from '../constants/colors';

export default class List extends Component {
  /**
   * Al momento de precionar en una pelicula se navega al detalle de la pelicula
   * @param {*} movieId
   */
  async _handlerClick(movieId) {
    this.props.actions.getMovie(movieId);
    this.props.navigation.navigate('detailsMovies');
  }

  /**
   * funcion para generar cada pelicula en cada lista principal
   * @param {*} item
   */
  _renderItem(item) {
    return (
      <TouchableWithoutFeedback onPress={() => this._handlerClick(item.id)}>
        <View key={item.id}>
          <Image
            style={stylesList.imageMovie}
            source={{
              uri: item.poster_path,
            }}
          />
          <Text style={stylesList.titleMovie}>{item.original_title}</Text>

          <Stars
            default={(item.vote_average / 10) * 5}
            count={5}
            half={true}
            starSize={6}
            fullStar={
              <Icon
                size={20}
                color={customColors.yellow}
                name={'star'}
                style={[styles.myStarStyle]}
              />
            }
            emptyStar={
              <Icon
                size={20}
                color={customColors.yellow}
                name={'star-outline'}
                style={[styles.myStarStyle, styles.myEmptyStarStyle]}
              />
            }
            halfStar={
              <Icon
                size={20}
                color={customColors.yellow}
                name={'star-half'}
                style={[styles.myStarStyle]}
              />
            }
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const {movies, title} = this.props;
    return (
      <View style={styles.viewFlex}>
        <View>
          <View style={styles.viewRow}>
            <View style={styles.viewFlex}>
              <Text style={stylesList.textTitle}>{title}</Text>
            </View>
            <View style={styles.viewFlex}>
              <Text style={stylesList.textSee}>See all</Text>
            </View>
          </View>
          <FlatList
            style={{paddingTop: 13}}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 18}} />}
            renderItem={({item}) => this._renderItem(item)}
            data={
              movies && movies.results && movies.results.length > 0
                ? movies.results.map((d) => {
                    d.poster_path =
                      'https://image.tmdb.org/t/p/w500' + d.poster_path;
                    return d;
                  })
                : []
            }
          />
        </View>
      </View>
    );
  }
}

const stylesList = StyleSheet.create({
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  textTitle: {
    padding: 10,
    fontWeight: 'bold',
  },
  textSee: {
    padding: 10,
    textAlign: 'right',
  },
  titleMovie: {
    marginTop: 8,
    width: 120,
    fontWeight: 'bold',
  },
  imageMovie: {
    borderRadius: 20,
    width: 120,
    height: 180,
  },
});
