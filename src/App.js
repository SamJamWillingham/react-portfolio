import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Social from "./Social";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGbsqEpJcP2oA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=H6vTZMVntY6X1oRVNacPKGbhZxFguygFZX9cxum0Vuo"
          width="140"
          alt="Sam"
          className="profile"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sam Willingham</h1>
        <Social />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
