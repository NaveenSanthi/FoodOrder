import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import React, { Fragment } from "react";
function Modal(props) {
  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.removeCart} />;
  };
  const Modal = () => {
    return <Fragment>{props.children}</Fragment>;
  };
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop removeCart={props.removeCart} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Modal>{props.children}</Modal>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}
export default Modal;
