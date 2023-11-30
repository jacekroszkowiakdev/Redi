export interface UserProps {
    email: string;
    userName: string;
}

export interface DashboardProps {
    onLogout: () => void;
}

export interface LoginProps {
    onLogin: () => void;
}
