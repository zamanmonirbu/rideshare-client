import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './component/privateRoute/PrivateRoute';
import MapForm from './component/MapForm/MapForm';
import { createContext, useState } from 'react';
import UserReviews from './component/UserReviews/UserReviews';
import HelpAndUserManual from './component/Help/HelpAndUserManual';
import Blog from './component/Blog/Blogs';
import RideOptions from './component/RideOperation/RideOperation';
import NavigationBar from './component/NavigationBar/NavigationBar'
import Footer from './component/Footer/Footer';
// import UserProfile from './component/Profile/UserProfile ';
import Time from './component/Time/Time';
import ThankYouMessage from './component/ConfirmRide/ConfirmRide';
import RiderLoginComponent from './component/RiderAuth/Login';
import RiderRegistrationComponent from './component/RiderAuth/Registration';
import Registration from './component/UserAuth/Registration';
import Login from './component/UserAuth/Login';
import Rider from './component/Rider/Rider';
import UserProfile from './component/UserProfile/UserProfile';
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
          <Route path='/rider/login' element={<RiderLoginComponent/>} />
          <Route path='/rider/register' element={<RiderRegistrationComponent/>} />
          <Route path='/rider/profile' element={<Rider/>} />
          <Route path='/help' element={<HelpAndUserManual />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/time' element={<Time/>} />
          <Route path='/user/login' element={<Login/>} />
          <Route path='/user/register' element={<Registration/>} />
          <Route path='/confirm/thanks' element={<ThankYouMessage/>} />
          
          <Route path='/mapView/:vehicle' element={<MapForm />} />
            <Route path='/user/profile' element={<UserProfile/>} />
          <Route path='/*' element={<PrivateRoute />}>
            {/* <Route path='mapView' element={<MapForm />} />
            <Route path='user/profile' element={<UserProfile/>} /> */}
          </Route>
        </Routes>
        <Footer/>
      </userContext.Provider>
    </div>
  );
}

export default App;
