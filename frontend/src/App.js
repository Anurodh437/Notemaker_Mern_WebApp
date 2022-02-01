import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/CreateNote/SingleNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/profile" exact component={ProfileScreen} />
        <Route
          path="/mynotes"
          exact
          component={() => <MyNotes search={search} />}
        />
        <Route path="/createnote" exact component={CreateNote} />
        <Route path="/note/:id" exact component={SingleNote} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
