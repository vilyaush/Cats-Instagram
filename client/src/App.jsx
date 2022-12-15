import './App.css';
import {useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import {useDispatch} from 'react-redux'
import {initList} from './redux/actions/list.action'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    axios('http://localhost:3003/api')
    .then(({data}) => {
       dispatch(initList(data))

}) } , []) 


  return (
  <BrowserRouter>
  <header>
   <Nav/>
   </header>
   <main className='container'>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/favorites" element={<Profile/>}/>
     </Routes>
   </main>
  </BrowserRouter>
      
   
  );
}

export default App;
