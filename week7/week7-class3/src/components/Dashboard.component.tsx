import React, { useState } from "react";

export const Dashboard: React.FC = ({ user }) => {
    const handleLogOut = () => {};

    return (
        <>
            <h1>Welcome {user}</h1>
            <button onClick={handleLogOut}>Log Out</button>
        </>
    );
};
