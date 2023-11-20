import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './component/privateRoute/PrivateRoute';
import MapForm from './component/MapForm/MapForm';
import { createContext, useState } from 'react';
import Login from './component/Login/Login';
import UserReviews from './component/UserReviews/UserReviews';
import Trip from './component/Trip/Trip';
import HelpAndUserManual from './component/Help/HelpAndUserManual';
import Blog from './component/Blog/Blogs';
import RideOptions from './component/RideOperation/RideOperation';
import NavigationBar from './component/NavigationBar/NavigationBar'
import Footer from './component/Footer/Footer';
import Register from './component/Registration/Registration';
import UserProfile from './component/Profile/UserProfile ';
import Time from './component/Time/Time';
export const userContext = createContext()
function App() {
  const [user, setUser] = useState('')

  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<RideOptions />} />
          <Route path='/review' element={<UserReviews />} />
          <Route path='/trip' element={<Trip />} />
          <Route path='/help' element={<HelpAndUserManual />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/time' element={<Time/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/*' element={<PrivateRoute />}>
            <Route path='mapView' element={<MapForm />} />
            <Route path='user/profile' element={<UserProfile/>} />
          </Route>
        </Routes>
        <Footer/>
      </userContext.Provider>
    </div>
  );
}

export default App;
