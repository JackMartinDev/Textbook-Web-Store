import "./Modal.css";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const Modaloverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Modaloverlay>{props.children}</Modaloverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
