import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/UserAccount/LoginPage";
import RegisterPage from "./Components/UserAccount/RegisterPage";
import HomePage from "./Components/HomePage";
import NotFoundPage from "./Components/NotFoundPage";
import NavBar from "./Components/UI/NavBar";
import ProfilePage from "./Components/ProfilePage";
import AgentProfilePage from "./Components/AgentProfilePage";
import CreateListingPage from "./Components/CreateListingPage";
import Buy from "./Pages/Buy";
import Rent from "./Pages/Rent";
import IndividualListing from "./Pages/IndividualListing";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* User: Home, Buy, Rent, Profile */}
        <Route path="/user/home" element={<HomePage />} />
        <Route path="/user/buy/:id" element={<IndividualListing />} />
        <Route path="/user/buy" element={<Buy />} />
        <Route path="/user/rent/:id" element={<IndividualListing />} />
        <Route path="/user/rent" element={<Rent />} />
        <Route path="/user/profile" element={<ProfilePage />} />
        {/* Agent: Home, Buy, Rent, New Listing, Profile */}
        <Route path="/agent/home" element={<HomePage />} />
        <Route path="/agent/buy/:id" element={<IndividualListing />} />
        <Route path="/agent/buy" element={<Buy />} />
        <Route path="/agent/rent/:id" element={<IndividualListing />} />
        <Route path="/agent/rent" element={<Rent />} />
        <Route path="/agent/profile" element={<AgentProfilePage />} />
        <Route path="agent/new-listing" element={<CreateListingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
    // <div>
    //     {typeof backendData.users == "undefined" ? (
    //         <p>Loading...</p>
    //     ) : (
    //         backendData.users.map((user, i) => <p key={i}>{user}</p>)
    //     )}
    // </div>
  );
}

export default App;
