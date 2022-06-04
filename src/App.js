import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Posting from "./pages/Posting.js";
import DetailPost from "./pages/DetailPost.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Posting" element={<Posting />} />
        <Route path="/DetailPost" element={<DetailPost />} />
      </Routes>
    </div>
  );
}

export default App;
