import { ADD_TO_FAVORITE } from "../types"

export function favoriteReducer(state=[], action){
    const {type} = action

    switch(type) {
        case ADD_TO_FAVORITE: {
         const {payload: id} =  action 
         return [...state, id]
        }
       

        default:{
            return state
        }
    }

}