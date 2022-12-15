import { ADD_TO_FAVORITE } from "../types";

export const addToFavorites = (id) => ({
 type: ADD_TO_FAVORITE,
 payload: id
})