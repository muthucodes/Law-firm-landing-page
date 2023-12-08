// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import WhyUs from "./WhyUs/WhyUs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <WhyUs />
    </div>
  );
}

export default App;
