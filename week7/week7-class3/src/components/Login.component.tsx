import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginEmail {
    email: string;
    password: string;
}

export const Login: React.FC = ({ loggedIn, handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
    };
    const userIsLoggedIn = handleLogin(email, password);

    if (userIsLoggedIn) {
        setEmail("");
        setPassword("");
        navigateTo("/dashboard");
    }

    return (
        <>
            <h3>Login</h3>
            {!loggedIn && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </>
    );
};
