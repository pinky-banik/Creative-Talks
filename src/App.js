import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from './Components/Topbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Write from './Components/Write';
import Single from './Components/Single';
import Settings from './Components/Settings';
import Login from './Components/Login';
import { useContext } from 'react';
import Register from './Components/Register';
import { Context } from './context/Context';


function App() {
  // const {user}=useContext(Context);
  const user = true;
  return (
    <div >
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />}/>
          

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
