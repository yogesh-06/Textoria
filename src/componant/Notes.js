import React, { useState } from "react";

const Notes = (props) => {
  const [update, setUpdate] = useState(props.content);

  const updateNote = () => {
    setUpdate((selectedNote) => {
      props.onChange(selectedNote);
      // return [...selectedNote,];
      console.log(selectedNote);
    });
  };
  // const handleOnChange = (event) => {
  //   setUpdate(event.target.value);
  // };
  return (
    <>
      <div className="d-flex">
        <p>{update}</p>
        <button className="btn btn-success btn-sm " onClick={updateNote}>
          Update
        </button>
      </div>
    </>
  );
};

export default Notes;
