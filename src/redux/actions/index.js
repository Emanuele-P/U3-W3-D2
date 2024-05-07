export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'

export const removeFavouriteAction = (id) => ({
  type: REMOVE_FAVOURITE,
  payload: id,
})
export const addToFavouriteAction = (data) => ({
  type: 'ADD_TO_FAVOURITE',
  payload: data,
})
