import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React from "react";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="addpost" element={<AddPost />} />
          <Route path="editpost/:postid" element={<EditPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
