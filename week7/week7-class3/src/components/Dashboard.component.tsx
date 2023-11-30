import React from "react";
import { DashboardProps } from "../model/model";

type Props = DashboardProps;

export const Dashboard: React.FC<Props> = (handleLogout) => {
    return (
        <>
            <button onClick={() => handleLogout}>Log Out</button>
        </>
    );
};
