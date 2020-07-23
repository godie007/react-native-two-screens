import * as c from '../constants/index';

const initialState = {
  credits: [],
  original_title: '',
  production_companies: [],
  backdrop_path: '',
  overview: '',
  vote_average: '',
  release_date: '',
  genres: []
};

export default function form(state = initialState, action) {
  switch (action.type) {
    case c.HANDLER_SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case c.HANDLER_CLEAR_MOVIE:
      return {...state, ...initialState};
    default:
      return state;
  }
}
