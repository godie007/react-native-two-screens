import {connect} from 'react-redux';
import detailsMovies from '../components/DetailsMovies';
import {withTheme} from 'react-native-paper';

const mapStateToProps = (state) => ({
  backdrop_path: state.detailsMovies.backdrop_path,
  vote_average: state.detailsMovies.vote_average,
  genres: state.detailsMovies.genres,
  isFetching: state.detailsMovies.isFetching,
  release_date: state.detailsMovies.release_date,
  credits: state.detailsMovies.credits,
  production_companies: state.detailsMovies.production_companies,
  overview: state.detailsMovies.overview,
  original_title: state.detailsMovies.original_title,
});

export default connect(mapStateToProps, null)(withTheme(detailsMovies));
