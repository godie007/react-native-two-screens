import * as c from '../constants';
import {httpAPI} from '../util';

/**
 * Funcion para listar el top de peliculas
 */
export function listMoviesTopRated() {
  return async (dispatch) => {
    try {
      dispatch({
        type: c.HANDLER_LIST_TOP_OF_MOVIES_REQUEST,
      });
      const {data} = await httpAPI(
        'top_rated?api_key=' + c.API_TOKEN,
        'get',
        null,
      );
      if (data) {
        dispatch({
          type: c.HANDLER_LIST_TOP_OF_MOVIES_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: c.HANDLER_LIST_TOP_OF_MOVIES_FAILURE,
      });
    }
  };
}

/**
 * Función para llamar las peliculas mas populares
 */
export function listMoviesPopular() {
  return async (dispatch) => {
    try {
      dispatch({
        type: c.HANDLER_LIST_MOVIES_POPULAR_REQUEST,
      });
      const {data} = await httpAPI(
        'popular?api_key=' + c.API_TOKEN,
        'get',
        null,
      );
      if (data) {
        dispatch({
          type: c.HANDLER_LIST_MOVIES_POPULAR_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: c.HANDLER_LIST_MOVIES_POPULAR_FAILURE,
      });
    }
  };
}

/**
 * Con el fin de generar el detalle de una pelicula se realizan 2 solicitudes
 * para generar la data del maestro-detalle
 */
export function getMovie(movieIdentity) {
  return async (dispatch) => {
    try {
      dispatch({
        type: c.HANDLER_SEARCH_MOVIE_REQUEST,
      });
      // se consulta el mastro
      const {data: movie} = await httpAPI(
        movieIdentity + '?api_key=' + c.API_TOKEN,
        'get',
        null,
      );
      dispatch({
        type: c.HANDLER_SEARCH_DETAILS_MOVIE_REQUEST,
      });
      // se consulta los detalles
      const {
        data: {credits: cast},
      } = await httpAPI(
        movieIdentity + '/credits?api_key=' + c.API_TOKEN,
        'get',
        null,
      );
      // se asigna los creditos a la pelicula
      movie.credits = cast;
      if (movie) {
        dispatch({
          type: c.HANDLER_SEARCH_MOVIE_SUCCESS,
          payload: movie,
        });
        dispatch({
          type: c.HANDLER_SEARCH_DETAILS_MOVIE_SUCCESS,
        });
      }
    } catch (error) {
      dispatch({
        type: c.HANDLER_SEARCH_DETAILS_MOVIE_FAILURE,
      });
      dispatch({
        type: c.HANDLER_SEARCH_MOVIE_FAILURE,
      });
    }
  };
}
