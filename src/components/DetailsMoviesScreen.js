import React, { Component } from 'react';
import { View, StatusBar, ScrollView, Image, FlatList } from 'react-native';
import {
  Title,
  Button,
  Caption,
  Text,
  ActivityIndicator,
} from 'react-native-paper';
import Stars from 'react-native-stars';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/General';
import * as c from '../constants';
import { customColors } from '../constants/colors';
import { stylesDetails } from './styles/DetailsMovies';


// funcion para separar los generos de cada pelicula con el caracter comma
const listGenres = (genres) =>
  genres && genres.length > 0
    ? genres.map((gender) => gender.name).join(', ')
    : '';
// funcion para separar las produciones de cada pelicula con el caracter comma
const formatProduction = (production) =>
  production && production.length > 0
    ? production.map((studio) => studio.name).join(', ')
    : '';

class detailsMovies extends Component {
  
  componentWillUnmount() {
    console.log('Entra');
    let { actions: { listMoviesTopRated, listMoviesPopular } } = this.props
    listMoviesTopRated();
    listMoviesPopular();
  }
  /**
   * Funcion para renderizar cada imagen de la lista de Peliculas
   * @param {*} item
   */
  renderItem(item) {
    const image = item.profile_path
      ? { uri: c.MOVIE_W500 + item.profile_path }
      : require('../assets/images/default.png');

    return (
      <View key={item.cast_id}>
        <Image style={stylesDetails.imageProfile} source={image} />
        <Text style={stylesDetails.titleProfile}>{item.name}</Text>
      </View>
    );
  }

  render() {
    let {
      genres,
      credits,
      production_companies,
      original_title,
      overview,
      vote_average,
      release_date,
      backdrop_path,
      theme,
      isFetching,
    } = this.props;
    const { colors } = theme;

    return (
      <View>
        {!isFetching ? (
          <View style={styles.containerMovies}>
            <Image
              style={stylesDetails.image}
              source={{
                uri: c.MOVIE_ORIGINAL + backdrop_path,
              }}
            />

            <ScrollView contentContainerStyle={styles.scroll}>
              <StatusBar barStyle="default" />
              <View style={styles.viewRow}>
                <View style={stylesDetails.titleOriginal}>
                  <Title style={stylesDetails.textTitle}>
                    {original_title}
                  </Title>
                </View>
                <View style={styles.viewFlex}>
                  <Icon.Button
                    color={colors.text}
                    style={stylesDetails.icon}
                    name="video-4k-box"
                    backgroundColor="transparent"
                    size={30}
                    onPress={() => { }}
                  />
                </View>
              </View>
              <View style={styles.viewRow}>
                <View style={styles.viewFlex}>
                  <Button
                    style={{ ...stylesDetails.btnWatch }}
                    color="#6B7480"
                    mode="contained"
                    onPress={() => { }}>
                    WATCH NOW
                  </Button>
                </View>
                <View style={styles.viewFlex}>
                  <Stars
                    default={parseInt((vote_average / 10) * 5)}
                    count={5}
                    half={true}
                    starSize={6}
                    fullStar={
                      <Icon
                        size={25}
                        color={customColors.yellow}
                        name={'star'}
                        style={[styles.myStarStyle]}
                      />
                    }
                    emptyStar={
                      <Icon
                        size={25}
                        color={customColors.yellow}
                        name={'star-outline'}
                        style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                      />
                    }
                    halfStar={
                      <Icon
                        size={25}
                        color={customColors.yellow}
                        name={'star-half'}
                        style={[styles.myStarStyle]}
                      />
                    }
                  />
                </View>
              </View>
              <View style={styles.viewColumn}>
                <Caption style={stylesDetails.textCation}>{overview}</Caption>
                <View style={{ margin: 15 }}>
                  <FlatList
                    keyExtractor={(item) => item.cast_id.toString()}
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
                    renderItem={({ item }) => this.renderItem(item)}
                    data={credits}
                  />
                </View>
                <View style={styles.viewRow}>
                  <View>
                    <Title style={stylesDetails.textDetails}>Studio</Title>
                  </View>
                  <View style={{ width: '80%' }}>
                    <Caption style={stylesDetails.textCationDetails}>
                      {formatProduction(production_companies)}
                    </Caption>
                  </View>
                </View>
                <View style={styles.viewRow}>
                  <View>
                    <Title style={stylesDetails.textDetails}>Genre</Title>
                  </View>
                  <View style={{ width: '85%', flex: 1 }}>
                    <Caption style={stylesDetails.textCationDetails}>
                      {listGenres(genres)}
                    </Caption>
                  </View>
                </View>
                <View style={styles.viewRow}>
                  <View>
                    <Title style={stylesDetails.textDetails}>Release</Title>
                  </View>
                  <View>
                    <Caption style={stylesDetails.textCationDetails}>
                      {release_date.split('-')[0].trim()}
                    </Caption>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        ) : (
            <ActivityIndicator
              color={'#0B41DE'}
              size={'large'}
              style={stylesDetails.indicator}
            />
          )}
      </View>
    );
  }
}
detailsMovies.propTypes = {
  actions : PropTypes.object.isRequired,
  genres:PropTypes.array,
  credits:PropTypes.string,
  production_companies:PropTypes.array.isRequired,
  original_title:PropTypes.string.isRequired,
  overview:PropTypes.object.isRequired,
  vote_average:PropTypes.number.isRequired,
  release_date:PropTypes.string.isRequired,
  backdrop_path:PropTypes.string.isRequired,
  theme:PropTypes.object.isRequired,
  isFetching:PropTypes.bool.isRequired,
};
export default detailsMovies
