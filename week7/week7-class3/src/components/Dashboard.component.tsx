import React, { useState } from "react";

export const Dashboard: React.FC = ({ user }) => {
    return (
        <>
            <h1>Welcome {user}</h1>
            <button onClick={handleLogOut}>Log Out</button>
        </>
    );
};
