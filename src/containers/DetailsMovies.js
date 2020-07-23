import {connect} from 'react-redux';
import detailsMovies from '../components/DetailsMoviesScreen';
import {withTheme} from 'react-native-paper';
import {listMoviesTopRated, listMoviesPopular} from '../actions/index';
const mapStateToProps = (state) => ({
  backdrop_path: state.detailsMovies.backdrop_path,
  vote_average: state.detailsMovies.vote_average,
  genres: state.detailsMovies.genres,
  isFetching: state.events.isFetching,
  release_date: state.detailsMovies.release_date,
  credits: state.detailsMovies.credits,
  production_companies: state.detailsMovies.production_companies,
  overview: state.detailsMovies.overview,
  original_title: state.detailsMovies.original_title,
});
const mapDispatchToProps = (dispatch) => ({
  actions: {
    listMoviesTopRated: () => dispatch(listMoviesTopRated()),
    listMoviesPopular: () => dispatch(listMoviesPopular()),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(detailsMovies));
