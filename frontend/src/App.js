import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
