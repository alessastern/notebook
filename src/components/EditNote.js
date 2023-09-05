import { useState } from "react";
import "./styles.css";
import React from "react";

function EditNote() {
  const [show, setShow] = useState(false);

  function Modal() {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <div className="title">
            <h2>Edit your note</h2>
          </div>
          <div className="body">
            <form></form>
          </div>
          <div className="footer">
            <button className="button" onClick={() => setShow(false)}>
              Cancel
            </button>
            <button className="button-save">Save</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <button className="button" onClick={() => setShow(true)}>
        Edit
      </button>
      {show ? (
        <>
          <Modal />
        </>
      ) : null}
    </div>
  );
}

export default EditNote;
