import React from "react";
import "./Modal.css"

const Modal = ({ handleCloseAndSave, showModal, children }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
          {children}
      </section>
      <button onClick={handleCloseAndSave}></button>
    </div>
  );
};

export default Modal;
