import React from "react";
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
    useNavigate,
} from "react-router-dom";
import { useState } from "react";

interface UserData {
    email: string;
    userName: string;
}

function App() {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<UserData | null>(null);
    const navigateTo = useNavigate();

    const handleLogin = (email: string, password: string) => {
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
                    <Route path="/">
                        {isLoggedIn ? (
                            <Navigate to="/dashboard" />
                        ) : (
                            <Home onLogin={handleLogin} />
                        )}
                    </Route>
                    <Route path="/login">
                        {isLoggedIn ? (
                            <Navigate to="/dashboard" />
                        ) : (
                            <Login onLogin={handleLogin} />
                        )}
                    </Route>
                    <Route path="/dashboard">
                        {isLoggedIn ? (
                            <Dashboard onLogout={handleLogout} />
                        ) : (
                            <Navigate to="/" />
                        )}
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
