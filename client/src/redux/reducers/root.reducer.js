import {combineReducers} from 'redux'
import { listReducer } from './list.reducer'
import { favoriteReducer } from './favotite.reducer'
export const rootReducer = combineReducers({
    list: listReducer,
    favorites: favoriteReducer
})