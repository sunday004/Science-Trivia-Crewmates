import './App.css';
import React, { useState, useEffect  } from 'react';
import { useRoutes} from 'react-router-dom';
import { supabase } from './client';
import ReadMates from './pages/ReadMate';
import CreateMate from './pages/CreateMate';
import UpdateMate from './pages/UpdateMate';
import { Link } from 'react-router-dom';
import Home from './pages/Home'
function App() {

  const [mates, setMates] = useState([])

  useEffect( () =>{
    const fetchMates = async () => {
    const {data} = await supabase
      .from('Mates')
      .select();
  
    // set state of posts
    setMates(data)
  }
  fetchMates()
  }, [])

  let element = useRoutes([
    {
      path:"/",
      element:<Home />
    },
     {
      path: "/gallery",
      element:<ReadMates data={mates}/>
    },
    {
      path:"/gallery/update/:id",
      element: <UpdateMate data={mates} />
    },
    {
      path:"/new",
      element: <CreateMate />
    } 
  ]);
  return (
    <div className='app'>
    <div className='sidebar'>
      <ul>
      <li><Link to={'/'} className='link'><h4>Home</h4></Link></li>
      <li><Link to={"/gallery"} className='link'><h4>View Gallery</h4></Link></li>
      <li><Link to={'/new'} className='link'><h4>Create Crewmate</h4></Link></li>
      </ul>
    </div>
    {element}
    </div>
  )
}

export default App
