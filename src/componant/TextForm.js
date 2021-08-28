import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [btnText, setbtnText] = useState(false);

  const handleupClick = (abc) => {
    console.log("upperCase was clicked!" + text);
    if (abc) {
      let newText = text.toUpperCase();
      setText(newText);
      setbtnText(true);
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      setbtnText(false);
    }
  };

  const handleCapitalLetter = () => {
    const firstWordCap = text.split(" ").map((word) => {
      return word.charAt(0).toUpperCase().concat(word.slice(1, word.length));
    });
    setText(firstWordCap.join(" "));

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

  const clearTextAria = () => {
    // let clear = (document.getElementById("myBox").value = "");
    // console.log(clear);
    setText("");
  };

  const handleOnChange = (event) => {
    // console.log("onChange", event.target.value);
    setText(event.target.value);
  };

  // console.log("text", text);

  return (
    <div>
      <h1> {props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
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
    </div>
  );
}
