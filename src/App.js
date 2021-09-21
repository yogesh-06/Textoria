import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componant/Navbar";
import TextForm from "./componant/TextForm";
import Aboutus from "./componant/Aboutus";
import React, { useState } from "react";
import Alert from "./componant/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.background = "rgb(0 18 58)";
      showAlert("Dark Mode Is enable", "primary");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode Is enable", "primary");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="WorkHolic" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/Aboutus">
              <Aboutus heading="About Us" mode={mode} />
            </Route>
            <Route exact path="/TextForm">
              <TextForm
                showAlert={showAlert}
                heading="Enter The Text To Anylize Below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
