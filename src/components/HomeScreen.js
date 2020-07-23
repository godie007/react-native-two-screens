import React, { Component } from 'react'
import { View, StatusBar, ScrollView } from 'react-native'
import { Title, Searchbar } from 'react-native-paper'
import ListMovies from '../containers/ListMovies'
import styles from './styles/General'
import PropTypes from 'prop-types'
class Home extends Component {
  /**
   * En el momento de iniciar el aplicativo se cargan el top de peliculas y
   * las peliculas mas populares
   */
  componentDidMount () {
    this.props.actions.listMoviesTopRated()
    this.props.actions.listMoviesPopular()
  }

  render () {
    const { moviesTopRated, moviesPopular, theme } = this.props
    const { colors } = theme

    return (
      <View style={styles.containerPrincipal}>
        <View style={styles.header}>
          <Title style={styles.textTitle}>
            Hello, What do you want to watch ?
          </Title>
          <Searchbar
            style={styles.searchBar}
            placeholderTextColor="#fff"
            placeholder="Search"
            iconColor="#fff"
            value={''}
          />
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          <StatusBar barStyle="default" />
          <View
            style={[
              styles.containerMovies,
              { backgroundColor: colors.background }
            ]}>
            <View style={styles.centrar}>
              <ListMovies
                movies={moviesTopRated}
                title="RECOMMENDED FOR YOU"
                navigation={this.props.navigation}
              />
              <ListMovies
                movies={moviesPopular}
                title="TOP RATED"
                navigation={this.props.navigation}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

Home.propTypes = {
  moviesTopRated: PropTypes.object,
  actions: PropTypes.object.isRequired
}
export default Home
