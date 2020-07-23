import {connect} from 'react-redux';
import ListMovies from '../components/ListMovies';
import {getMovie} from '../actions/index';

const mapDispatchToProps = (dispatch) => ({
  actions: {
    getMovie: (idMovie) => dispatch(getMovie(idMovie)),
  },
});

export default connect(null, mapDispatchToProps)(ListMovies);
