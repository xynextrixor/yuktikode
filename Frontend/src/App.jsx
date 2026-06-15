import React from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useEffect } from "react";
import { checkAuth } from "./authSlice";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth);
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Homepage></Homepage> : <Navigate to="/signup" />
        }
      ></Route>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login></Login>}
      ></Route>
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to="/" /> : <Signup></Signup>}
      ></Route>
    </Routes>
  );
}

export default App;
