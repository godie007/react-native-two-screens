import * as c from '../constants/index';

const initialState = {
  topInformationOfMovies: [],
  informationPopularMovies: [],
};

export default function form(state = initialState, action) {
  switch (action.type) {
    case c.HANDLER_LIST_MOVIES_POPULAR_SUCCESS:
      return {...state, informationPopularMovies: action.payload};
    case c.HANDLER_LIST_TOP_OF_MOVIES_SUCCESS:
      return {...state, topInformationOfMovies: action.payload};
    case c.HANDLER_CLEAR_LIST_MOVIES:
      return {...state, ...initialState};
    default:
      return state;
  }
}
