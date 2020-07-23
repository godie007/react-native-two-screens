const initialState = {
  isFetching: false
}
/**
 * Funcion para controlar el loader principal
 * @param {*} state
 * @param {*} action
 */
export default function form (state = initialState, action) {
  let out = state
  // se aplica condicion middleware para controlar el loader
  out = action.type.includes('REQUEST') ? { ...state, isFetching: true } : out
  out = action.type.includes('SUCCESS') ? { ...state, isFetching: false } : out
  return out
}
