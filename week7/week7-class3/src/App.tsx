import React from 'react';
import "./App.css";
import { Home } from "./components/Home.component";
import { Login } from "./components/Login.component";
import { Dashboard } from "./components/Dashboard.component";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";
import { useState } from "react";

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogin = (email, password) => {
        if (email === "example@example.com" && password === "password") {
            setLoggedIn(true);
            setUser({ email: "email@example.com", userName: "user" });
            return true;
        }
        return false;
    };

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {isLoggedIn ? (
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        ) : null}
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/">
                        {isLoggedIn ? (
                            <Navigate="/dashboard" />
                        ) : (
                            <Home onLogin={handleLogin} />
                        )}
                    </Route>
                    <Route path="/login">
                        {isLoggedIn ? (
                            <Navigate="/dashboard" />
                        ) : (
                            <Login onLogin={handleLogin} />
                        )}
                    </Route>
                    <Route path="/dashboard">
                        {isLoggedIn ? (
                            <Dashboard onLogout={handleLogout} />
                        ) : (
                            <Navigate="/" />
                        )}
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
