import React from "react";
import "./DeleteBtn.css";

// Code from 04-Stu_AJAXFormDelete
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
