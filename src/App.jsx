import React from "react";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Technology from "./pages/Technology";
import HowItWorks from "./pages/HowItWorks";
import Ability from "./pages/Ability";
import Testimonials from "./pages/Testimonials";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Feature />
      <Technology />
      <HowItWorks />
      <Ability />
      <Testimonials />
      <Form />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
