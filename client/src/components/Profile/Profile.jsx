import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
 
function Profile() {
  const {favorites, list} = useSelector((state) => state)
  // const [cats, setCats] = useState([])
  
  // useEffect(() => {
  // setCats(() => {
  //  return 
  // })
  // }, [favorites])

  return (
        <ul className="list-group">
          { list.filter((el)=> favorites.includes(el.id)).map((cat) => (
           <li key={cat.id} className="list-group-item list-group-item-warning">
            <Card {...cat}/>
                 </li>
           ) )}
</ul>

  )
}

export default Profile