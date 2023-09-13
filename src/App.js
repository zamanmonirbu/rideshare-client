import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllLinks from './component/AllLinks/AllLinks';
import Login from './component/Login/Login';
import PrivateRoute from './component/privateRoute/PrivateRoute';
import MapForm from './component/MapForm/MapForm';
function App() {
  return (
    <div className="App">   
    <Routes>
          <Route path='/' element={<AllLinks />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/mapView' element={<PrivateRoute Component={MapForm} />} />
        </Routes>  
    </div>
  );
}

export default App;
