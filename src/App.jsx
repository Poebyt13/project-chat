import LoginSite from "./site/LoginSite";
import SignUpSite from "./site/SignUpSite";
import Home from "./site/Home";

import './style/App.css'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<LoginSite/>}></Route>
        <Route path="/SignUp" element={<SignUpSite/>}></Route>
      </Routes>
    </div>
  )
}

export default App
