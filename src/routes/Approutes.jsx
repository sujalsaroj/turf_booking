// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardPlayer from "../pages/DashboardPlayer";
import FindMatches from "../pages/FindMatches";
import MyMatches from "../pages/JoinMatch";
import Profile from "../pages/Profile";
import DashboardTurfOwner from "../pages/DashboardTurfOwner";
import AddTurf from "../pages/AddTurf";
import ManageTurf from "../pages/ManageTurf";
import BookTurf from "../pages/bookturf";
import ViewBookings from "../pages/viewbooking";
import RaiseConnection from "../pages/raiseconnection";
import JoinConnection from "../pages/JoinMatch";
import Homepage from "../pages/Home";
import About from "../pages/about";
import Contact from "../pages/contactus";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard-player" element={<DashboardPlayer />} />
      <Route path="/raise-connection" element={<RaiseConnection />} />
      <Route path="/find-matches" element={<FindMatches />} />
      <Route path="/join-match" element={<JoinConnection />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard-turf-owner" element={<DashboardTurfOwner />} />
      <Route path="/addturf" element={<AddTurf />} />
      <Route path="/manageturf" element={<ManageTurf />} />
      <Route path="/bookTurf" element={<BookTurf />} />
      <Route path="/mybooking" element={<ViewBookings />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
