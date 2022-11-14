import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/UserAccount/LoginPage";
import RegisterPage from "./Components/UserAccount/RegisterPage";
import HomePage from "./Components/HomePage";
import NotFoundPage from "./Components/NotFoundPage";
import NavBar from "./Components/UI/NavBar";

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
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/buy/:id" element={<HomePage />} />
            <Route path="/rent/:id" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
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
