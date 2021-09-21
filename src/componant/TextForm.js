import React, { useState } from "react";
import Notes from "./Notes";
export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [btnText, setbtnText] = useState(false);
  const [content, setContent] = useState([]);
  const [active] = useState(true);

  const handleupClick = (abc) => {
    if (abc) {
      let newText = text.toUpperCase();
      setText(newText);
      setbtnText(true);
      props.showAlert("Text converted into UpperCase", "success");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      setbtnText(false);
      props.showAlert("Text converted into LowerCase", "success");
    }
  };

  const handleCapitalLetter = () => {
    const firstWordCap = text.split(" ").map((word) => {
      return word.charAt(0).toUpperCase().concat(word.slice(1, word.length));
    });
    setText(firstWordCap.join(" "));
    props.showAlert(
      "First Character Of Each Word Has Been Capitaliesed",
      "success"
    );

    // let text = document.getElementById("myBox").value;
    // var string = "";
    // let saprete = text.split(" ");
    // for (let i = 0; i < saprete.length; i++) {
    //   saprete[i] = saprete[i][0].toUpperCase() + saprete[i].substr(1);
    //   setText(string);
    //   string.concat(saprete[i]);
    //   console.log(string);
    // }
  };
  const save = () => {
    setContent((recentContent) => {
      return [...recentContent, text];
    });
    setText("");
  };

  const clearTextAria = () => {
    // let clear = (document.getElementById("myBox").value = "");
    setText("");
    props.showAlert("Your Text Has Been Cleared", "danger ");
  };

  const handleOnChange = (event) => {
    // console.log("onChange", event.target.value);
    setText(event.target.value);
  };
  const handleOnUpdate = (text) => {
    setText(text);
    active(false);
  };

  // console.log("text", text);

  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "rgb(0 18 58)",
        position: "fixed",
        top: "90px",
        // right: "px",
      }}
      className="container mt-2"
    >
      <h1> {props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#504c4c" : "white",
            color: props.mode === "dark" ? "white" : "rgb(0 18 58)",
          }}
          id="myBox"
          rows="5"
        ></textarea>
      </div>
      <button
        className="btn btn-primary btn-sm  m-2"
        onClick={() => {
          btnText ? handleupClick(false) : handleupClick(true);
        }}
      >
        {!btnText ? "Convert To Uppercase" : "Convert To Lowercase"}
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={handleCapitalLetter}
      >
        Capital 1st Letter
      </button>
      <button className="btn btn-primary btn-sm  m-2" onClick={clearTextAria}>
        Clear Text
      </button>
      <button className="btn btn-primary btn-sm  m-2" onClick={save}>
        Save
      </button>
      <div>
        {content.map((contents) => {
          return (
            <div>
              <Notes content={contents} onChange={handleOnUpdate} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
