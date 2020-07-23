import {connect} from 'react-redux';
import Home from '../components/Home';
import {listMoviesTopRated, listMoviesPopular} from '../actions/index';
import {withTheme} from 'react-native-paper';

const mapStateToProps = (state) => ({
  moviesTopRated: state.movies.topInformationOfMovies,
  moviesPopular: state.movies.informationPopularMovies,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    listMoviesTopRated: () => dispatch(listMoviesTopRated()),
    listMoviesPopular: () => dispatch(listMoviesPopular()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Home));
