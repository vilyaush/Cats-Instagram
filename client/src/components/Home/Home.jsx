import React, {useEffect} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {addList} from '../../redux/actions/list.action'

import Card from '../Card/Card'

function Home() {
const {list} = useSelector((state) => state)
const dispatch = useDispatch()

function handleClick(){
axios('http://localhost:3003/cats')
.then(({data}) => {
  dispatch(addList(data))
})
}


  return (
    <div>
        <button onClick={handleClick} type="button" className="btn btn-outline-dark">Get cats</button>
        <ul className="list-group">
            {list.map(cat => (
            <li key={cat.id} className="list-group-item list-group-item-warning">
                <Card {...cat}/>
                 </li>
            ))}
</ul>
    </div>
  )
}

export default Home