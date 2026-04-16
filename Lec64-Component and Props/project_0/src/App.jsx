import { useState } from "react";
import "./App.css";
import Card from "./component/Card";
import Home from "./component/Home";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Parent from "./component/Parent";

function App() {
  const [tab, setTab] = useState("Home");
  const props = { name: "Prajwal" };
  return (
    <>
      <Parent {...props} />
      <Card child="real children prop" {...props}>
        <h2>Vaibhav</h2>
        <p>I'm living in Pune since 2000</p>
      </Card>
      <Card />

      <button onClick={() => setTab("Home")}>Home</button>
      <button onClick={() => setTab("Contact Us")}>Contact Us</button>
      <button onClick={() => setTab("About Us")}>About Us</button>

      {tab === "Home" ? (
        <Home />
      ) : tab === "About Us" ? (
        <About />
      ) : (
        <ContactUs />
      )}
    </>
  );
}

export default App;