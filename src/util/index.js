import axios from 'axios';
import {URL_SERVER} from '../constants';
/**
 * Funcion para realizar solicitudes http por medio de la libreria axios
 * @param {*} ENDPOINT identificador del endpoint
 * @param {*} METHOD  verbo de la arquitectura REST
 * @param {*} DATA  informacion que se le envia al API
 */
export const httpAPI = async (ENDPOINT, METHOD, DATA) =>
  await axios({
    METHOD,
    url: `${URL_SERVER}${ENDPOINT}`,
    data: DATA ? DATA : null,
  });
