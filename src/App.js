import React from "react";
import logo from "./logo.svg";
import "./App.css";
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
        <h1>Sam Willingham</h1> <h3>social</h3>
        <a
          href="https://www.linkedin.com/in/samantha-willingham-79576a1a8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="linked-in">LinkedIn</button>
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01f079375f21581fb6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="upWork">UpWork</button>
        </a>
        <a
          href="https://github.com/SamJamWillingham"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="gitHub">GitHub</button>
        </a>
        <h3>projects</h3>
        <a
          href="https://gifted-tereshkova-4aa25e.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="weatherApp">Vanilla JS Weather App</button>
        </a>
        <a
          href="https://ecstatic-leakey-e874b0.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="tarot">Tarot Card Drawer</button>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
