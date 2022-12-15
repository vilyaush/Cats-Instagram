import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addToFavorites} from '../../redux/actions/favorite.action'
import {delCat} from '../../redux/actions/list.action'

function Card({id, url}) {
    const {favorites} = useSelector(state => state)
    const dispatch = useDispatch()

  return (
<>
  <div className="card" style={{width: '18rem'}}>
    <img src = {url}/>
    </div>
    <button onClick={()=>dispatch(addToFavorites(id))} type="button" className="btn btn-outline-danger">{favorites.includes(id) ? "👍":"❤️"}</button>
    <button type="button" onClick={() => dispatch(delCat(id))} className="btn btn-outline-danger">Удалить</button>
    </>
  )
}

export default Card