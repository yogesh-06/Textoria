import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componant/Navbar";
import TextForm from "./componant/TextForm";

function App() {
  return (
    <>
      <Navbar title="WorkHolic" aboutText="About WorkHolic" />
      <div className="container my-3">
        {" "}
        <TextForm heading="Enter The Text To Anylize Below" />
      </div>
    </>
  );
}

export default App;
