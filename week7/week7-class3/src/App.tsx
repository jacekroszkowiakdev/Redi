import React from "react";
import { useState } from "react";
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
import { UserProps } from "./model/model";
import "./App.css";

function App() {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<UserProps>();
    const [email, setEmail] = useState<UserProps>();

    const navigate = useNavigate();

    // const handleLogin = (email: string, password: string) => {
    //     if (email === "example@example.com" && password === "password") {
    //         setLoggedIn(true);
    //         setUserName("user");
    //         setEmail("example@example.com");
    //         return true;
    //     }
    //     return false;
    // };

    const handleLogin = () => {
        setLoggedIn(true);
    };

    // const handleLogout = (email: string, password: string) => {
    //     if (email === "example@example.com" && password === "password") {
    //         setLoggedIn(false);
    //         setUser({ email: "", userName: "" });
    //         return true;
    //     }
    //     return false;
    // };

    const handleLogout = () => {
        setLoggedIn(false);
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
                            <Home
                                onLogin={handleLogin}
                                // userName={userName}
                                // email={email}
                            />
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
