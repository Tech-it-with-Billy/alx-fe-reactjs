import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ useAuth, children }) {
    if (!useAuth) {
        return <Navigate to="/" replace />;
    }
    return children;
}