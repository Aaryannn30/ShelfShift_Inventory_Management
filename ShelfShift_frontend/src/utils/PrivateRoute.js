import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    let { user } = useContext(AuthContext);

    // Conditionally render Navigate or children based on the user authentication status
    return user ? children : <Navigate to="/auth/signin" />;
};

export default PrivateRoute;
