import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import {BrowserRouter,Route} from 'react-router-dom';
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/login' exact component={LoginPage}/>
        <Route path='/register' exact component={RegisterPage}/>
        <Route path='/mynotes' exact component={MyNotes}/>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
