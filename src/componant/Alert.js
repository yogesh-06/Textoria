import React from "react";

function Alert(props) {
  const cap = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show p-1`}
        role="alert"
      >
        {props.alert.msg}: {cap(props.alert.type)}
        <button
          type="button"
          className="btn-close p-2"
          data-bs-dismiss="alert"
          // aria-label="Close"
        ></button>
      </div>
    )
  );
}
export default Alert;
