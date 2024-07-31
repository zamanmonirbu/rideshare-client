import { Route, Routes } from "react-router-dom";
import "./App.css";
import MapForm from "./Screen/MapForm";
import UserReviews from "./Screen/UserReviews";
import HelpAndUserManual from "./component/HelpAndUserManual";
import Blog from "./component/Blogs";
// import RideOptions from "./Screen/RideOperation";
import NavigationBar from "./component/Header/NavigationBar";
import Footer from "./component/Footer/Footer";
import ThankYouMessage from "./Screen/ConfirmRide";
import RiderLogin from "./component/Authentication/RiderAuth/RiderLogin";
import RiderRegistration from "./component/Authentication/RiderAuth/RiderRegistration";
import Registration from "./component/Authentication/UserAuth/UserRegistration";
import Login from "./component/Authentication/UserAuth/UserLogin";
import RiderProfile from "./Screen/RiderProfile";
import UserProfile from "./Screen/UserProfile";
import NotFound from "./component/NotFound";
import Privacy from "./component/Privacy";
import UserProtected from "./component/Authentication/PrivateRoute/UserProtected";
import RiderProtected from "./component/Authentication/PrivateRoute/RiderProtected";
import HelpMoreDetails from "./component/HelpMoreDetails";
import RideDetails from "./component/RideDetails";
import Home from "./component/HomeLayout/Home";


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/review" element={<UserReviews />} />
        <Route path="/help" element={<HelpAndUserManual />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/view/help/more" element={<HelpMoreDetails/>} />
        <Route path="/policy" element={<Privacy/>} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Registration />} />
        <Route path="/rider/login" element={<RiderLogin />} />
        <Route path="/rider/register" element={<RiderRegistration />}/>

        <Route path="/rider/profile" element={<RiderProtected/>}>
        <Route index element={<RiderProfile/>} />
        </Route>

        <Route path="/" element={<UserProtected/>}>
          <Route path="confirm/thanks" element={<ThankYouMessage />} />
          <Route path="mapView/:vehicle" element={<MapForm />} />
          <Route path="/ride-details/:vehicle" element={<RideDetails/>} />
          <Route path="user/profile" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import MapForm from "./Screen/MapForm";
// import UserReviews from "./Screen/UserReviews";
// import HelpAndUserManual from "./component/HelpAndUserManual";
// import Blog from "./component/Blogs";
// import RideOptions from "./Screen/RideOperation";
// import NavigationBar from "./component/Header/NavigationBar";
// import Footer from "./component/Footer/Footer";
// import ThankYouMessage from "./Screen/ConfirmRide";
// import RiderLogin from "./component/Authentication/RiderAuth/RiderLogin";
// import RiderRegistration from "./component/Authentication/RiderAuth/RiderRegistration";
// import Registration from "./component/Authentication/UserAuth/UserRegistration";
// import Login from "./component/Authentication/UserAuth/UserLogin";
// import RiderProfile from "./Screen/RiderProfile";
// import UserProfile from "./Screen/UserProfile";
// import NotFound from "./component/NotFound";
// import Privacy from "./component/Privacy";
// import UserProtected from "./component/Authentication/PrivateRoute/UserProtected";
// import RiderProtected from "./component/Authentication/PrivateRoute/RiderProtected";
// import HelpMoreDetails from "./component/HelpMoreDetails";


// function App() {
//   return (
//     <div className="App">
//       <NavigationBar />
//       <Routes>
//         <Route path="/" element={<RideOptions />} />
//         <Route path="/review" element={<UserReviews />} />
//         <Route path="/help" element={<HelpAndUserManual />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/view/help/more" element={<HelpMoreDetails/>} />
//         <Route path="/policy" element={<Privacy/>} />
//         <Route path="/user/login" element={<Login />} />
//         <Route path="/user/register" element={<Registration />} />
//         <Route path="/rider/login" element={<RiderLogin />} />
//         <Route path="/rider/register" element={<RiderRegistration />}/>

//         <Route path="/rider/profile" element={<RiderProtected/>}>
//         <Route index element={<RiderProfile/>} />
//         </Route>

//         <Route path="/" element={<UserProtected/>}>
//           <Route path="confirm/thanks" element={<ThankYouMessage />} />
//           <Route path="mapView/:vehicle" element={<MapForm />} />
//           <Route path="user/profile" element={<UserProfile />} />
//         </Route>
//         <Route path="*" element={<NotFound/>}/>
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
