import React from "react";

import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Rrgister";

import { BrowserRouter as Router, Routes, Route ,Navigate  } from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";
import Logout from "./pages/logout/Logout";
import Contacts from "./pages/contact/Contacts";
import Abouts from "./pages/Abouts/Abouts";

// import Music from "./pages/Music/Music";


function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" exact element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={user ?<Login />: <Navigate to="/register" />} />
        <Route path="/Write" element={user ?<Write />: <Navigate to="/register" />} />
        <Route path="/Contacts" element={user ?<Contacts />: <Navigate to="/register" />} />
        <Route path="/Settings" element={user ?<Settings />: <Navigate to="/register" />} />
        <Route path="/post/:postId" element={user ?<Single />: <Navigate to="/register" />} />
        <Route path="/Logout" element={user ?<Logout />: <Navigate to="/register" />} />
        <Route path="/Abouts" element={user ?<Abouts />: <Navigate to="/register" />} />
        {/* <Route path="/Music" element={user ?<Music />: <Navigate to="/register" />} /> */}
      </Routes>
    </Router>
  );
}

export default  App;
