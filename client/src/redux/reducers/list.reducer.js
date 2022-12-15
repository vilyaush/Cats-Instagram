import {ADD_CATS, INIT_LIST, DEL_CAT} from '../types'

export function listReducer(state =[], action){
    const {type, payload} = action
    console.log(payload)

    switch(type) {
        case INIT_LIST:{
            const {payload: list } = action 
        return list
        }
        case ADD_CATS:{
            const {payload: newCats} = action
            return [...newCats, ...state]
        }
        case DEL_CAT:{
            return state.filter(el => el.id !== payload)
        }
            

        default:{
            return state
        }
    }

}