import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home";

//  Import API instance (withCredentials enabled)
import API from "./utils/api";

function App() {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        //  Test call to protected route
        await API.get("/allHoldings");

        console.log("User Authorized  Dashboard Access Granted");
      } catch (error) {
        console.log("Not Authorized  Redirecting...");

        alert("Please login first!");

        window.location.href = "http://localhost:5173/login";
      }
    };

    checkAuth();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
