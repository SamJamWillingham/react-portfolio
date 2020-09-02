import React from "react";
import "./App.css";
import Social from "./Social";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="Header">Sam Willingham</h1>
      </div>
      <div className="About">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGbsqEpJcP2oA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=H6vTZMVntY6X1oRVNacPKGbhZxFguygFZX9cxum0Vuo"
          width="180"
          alt="Sam"
          className="profile"
        />
        <h1 className="title">Front End Web Developer</h1>
        <Social />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
