import * as c from '../constants/index';

const initialState = {
  credits: [],
  original_title: '',
  production_companies: [],
  backdrop_path: '',
  overview: '',
  vote_average: '',
  release_date: '',
  genres: [],
  isFetching: false,
};

export default function form(state = initialState, action) {
  switch (action.type) {
    case c.GET_MOVIE:
      return {
        ...state,
        ...action.payload,
      };
    case c.LOADING:
      return {...state, isFetching: true};
    case c.NOT_LOADING:
      return {...state, isFetching: false};
    case c.CLEAR_MOVIE:
      return {...state, ...initialState};
    default:
      return state;
  }
}
