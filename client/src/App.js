import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./Components/UserAccount/LoginForm";
import RegisterForm from "./Components/UserAccount/RegisterForm";
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
        <div>
            {typeof backendData.users == "undefined" ? (
                <p>Loading...</p>
            ) : (
                backendData.users.map((user, i) => <p key={i}>{user}</p>)
            )}
        </div>
    );

    // return <LoginForm />;
    // return <RegisterForm />;
    // return <NavBar />;
}

export default App;
