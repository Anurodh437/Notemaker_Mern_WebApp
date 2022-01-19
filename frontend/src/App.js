import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import {BrowserRouter,Route} from 'react-router-dom';
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/mynotes' exact component={MyNotes}/>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
