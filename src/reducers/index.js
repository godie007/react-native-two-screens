import {combineReducers} from 'redux';
import Movies from './Movies';
import detailsMovies from './DetailsMovies';

// Se convinan los reducers del sistema
const rootReducer = combineReducers({
  movies: Movies,
  detailsMovies: detailsMovies,
});
export default rootReducer;
