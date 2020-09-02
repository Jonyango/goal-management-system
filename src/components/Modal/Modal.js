import React from "react";
import "./Modal.css";

const Modal = ({ handleCloseAndSave, showModal, children }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">{children}
      <button onClick={handleCloseAndSave} className='modal-button'>
        CLOSE
      </button>
      </section>
      
    </div>
  );
};

export default Modal;
