import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/profile";
import Layout from "./Components/layouts/layout";
import User_Profile from "./pages/Profile/user_profile";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Profile />} />
                <Route path = "/details/:userID" element = {<User_Profile/>}/>
              </Route>
            </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
