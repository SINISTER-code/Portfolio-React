import React from "react";
import Contact from "./Components/Contact";
import Intro from "./Components/intro/Intro";
import Navbar from "./Components/navbar/Navbar";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <React.Fragment>
      {/* <ParticleBackground /> */}
      <Navbar />
      <Intro />
      <Contact />
    </React.Fragment>
  );
}

export default App;
