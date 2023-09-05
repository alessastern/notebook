import { useState } from "react";
import "./styles.css";
import React from "react";

function EditNote(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);

  function Modal() {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <div className="title">
            <h2>Edit your note</h2>
          </div>
          <div className="body">
            <form id="edit" className="form-styling">
              <div className="title">
                <input
                  className="inputs"
                  key="title"
                  type="text"
                  defaultValue={title}
                  onChange={(e) => {
                    setTitle(e.target.defaultValue);
                  }}
                ></input>
              </div>
              <div className="text">
                <textarea
                  key="text"
                  className="inputtext"
                  type="text"
                  defaultValue={text}
                  onChange={(e) => {
                    setText(e.target.defaultValue);
                  }}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="footer">
            <button className="button" onClick={() => setShow(false)}>
              Cancel
            </button>
            <button className="button-save" form="edit">
              Save
            </button>
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
