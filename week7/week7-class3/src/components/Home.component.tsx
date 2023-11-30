import React from "react";
import { Login } from "./Login.component";
import { LoginProps } from "../model/model";

export const Home: React.FC<LoginProps> = (handleLogin) => {
    return (
        <>
            <h1>
                {/* Welcome {userName} {email} */}
                Welcome
            </h1>
            <Login onLogin={() => handleLogin} />
        </>
    );
};
