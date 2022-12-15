import {ADD_CATS, INIT_LIST, DEL_CAT} from '../types'

export const addList = (list) => (
    {
        type: ADD_CATS, 
        payload: list
      }
)

export const initList = (list) => (
    {
        type: INIT_LIST,
        payload: list
      }
)

export const delCat = (id) => (
  {
    type: DEL_CAT, 
    payload: id
  }
  )

// export default delCat