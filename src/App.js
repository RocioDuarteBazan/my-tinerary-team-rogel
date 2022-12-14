import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound"
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Cities from "./pages/Cities";
import Hotels from './pages/Hotels';
import NewCity from "./pages/NewCity";
import NewHotel from "./pages/NewHotel";
import CitiesDetails from "./pages/CitiesDetails";
import HotelDetails from "./pages/HotelDetails";
import MyCities from "./pages/MyCities"
import MyHotels from "./pages/MyHotels"
import MyTineraries from "./pages/MyTineraries";
import MyShows from "./pages/MyShows";
import NewTinerary from "./pages/NewTinerary";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProtectedRoute from "./components/ProtectedRoute";
import userAction from "./redux/actions/userAction";
import Profile from './pages/Profile';
import NewShow from "./pages/NewShow";



function App() {

  let { logged, role } = useSelector(store => store.userReducer)
  let dispatch = useDispatch()
  let { reEntry } = userAction
  let token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      dispatch(reEntry(token.token.user))
    }
  }, [])
  // eslint-disable-next-line



  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/cities/:id" element={<CitiesDetails />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />

        { logged && (
          <Route element={<ProtectedRoute isAllowed={logged} reDirect="/" />}>
            <Route path="/myprofile" element={<Profile />} />
          </Route>
        )}

        <Route element={<ProtectedRoute isAllowed={role === "admin"} reDirect="/" />}></Route>

        <Route path="/signup" element={logged ? <Home /> : <SignUp />} />
        <Route path="/signin" element={logged ? <Home /> : <SignIn />} />

        <Route element={<ProtectedRoute isAllowed={role === "admin"} />} />
        <Route path="/newcity" element={<NewCity />} />
        <Route path="/newhotel" element={<NewHotel />} />
        <Route path="/mycities" element={<MyCities />} />
        <Route path="/myhotels" element={<MyHotels />} />

        
        <Route element={<ProtectedRoute isAllowed={role === "user"} reDirect="/" />}></Route>
        <Route path="/mytineraries" element={<MyTineraries />} />
        <Route path="/myshows" element={<MyShows />} />
        <Route path="/newtinerary" element={<NewTinerary />} />
        <Route path="/newshow" element={<NewShow />} />
        <Route />


      </Routes>
    </Layout>
  );
}

export default App;