// import { Route, Navigate } from "react-router-dom"
// import { useContext } from "react"
// import AuthContext from "../context/AuthContext"


// const PrivateRoute = ({ children, ...rest }) => {
//     let { user } = useContext(AuthContext)
//     return <Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>
// }

// export default PrivateRoute;

import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    let { user } = useContext(AuthContext);

    // Conditionally render Navigate or children based on the user authentication status
    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
