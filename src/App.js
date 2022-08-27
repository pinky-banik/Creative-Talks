import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from './Components/Topbar';
import Home from './Pages/Home';
import Single from './Components/Single';
import Write from './Components/Write';
import Settings from './Components/Settings';


function App() {
  return (
    <div >
      <Topbar/>
      <Settings/>
      <ToastContainer />
    </div>
  );
}

export default App;
