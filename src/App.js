import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./component/Authentication/privateRoute/PrivateRoute";
import MapForm from "./component/UserContent/MapForm/MapForm";
import UserReviews from "./component/UserContent/UserReviews/UserReviews";
import HelpAndUserManual from "./component/Others/Help/HelpAndUserManual";
import Blog from "./component/Others/Blog/Blogs";
import RideOptions from "./component/UserContent/RideOperation/RideOperation";
import NavigationBar from "./component/Header/NavigationBar";
import Footer from "./component/Footer/Footer";
import ThankYouMessage from "./component/UserContent/ConfirmRide/ConfirmRide";
import RiderLoginComponent from "./component/Authentication/RiderAuth/Login";
import RiderRegistrationComponent from "./component/Authentication/RiderAuth/Registration";
import Registration from "./component/Authentication/UserAuth/Registration";
import Login from "./component/Authentication/UserAuth/Login";
import Rider from "./component/RiderContent/Rider/Rider";
import UserProfile from "./component/UserContent/UserProfile/UserProfile";
import Protected from "./component/Authentication/privateRoute/Protected";
import NotFound from "./component/Others/NotFound/NotFound";
import Privacy from "./component/Others/Privacy/Privacy";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<RideOptions />} />
        <Route path="/review" element={<UserReviews />} />
        <Route path="/help" element={<HelpAndUserManual />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/policy" element={<Privacy/>} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Registration />} />
        <Route path="/rider/login" element={<RiderLoginComponent />} />
        <Route
          path="/rider/register"
          element={<RiderRegistrationComponent />}
        />

        <Route path="/rider/profile" element={<Protected/>}>
          <Route path="" element={<Rider />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="confirm/thanks" element={<ThankYouMessage />} />
          <Route path="mapView/:vehicle" element={<MapForm />} />
          <Route path="user/profile" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
