import { combineReducers } from 'redux'
import Movies from './Movies'
import detailsMovies from './DetailsMovies'
import events from './Events'

// Se combinan los reducers del sistema
const rootReducer = combineReducers({
  movies: Movies,
  detailsMovies: detailsMovies,
  events
})
export default rootReducer
