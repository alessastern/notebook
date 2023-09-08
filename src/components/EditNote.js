import { useState } from "react";
import "./styles.css";
import React from "react";

function EditNote(props) {
  const [show, setShow] = useState(false);

  function Modal(props) {
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);
    return (
      <div className="modal-background">
        <div className="modal-body">
          <div className="title">
            <h2>Edit your note</h2>
          </div>
          <form
            id="edit"
            onSubmit={(e) => {
              e.preventDefault();
              props.updateNote(props.id, title, text);
              window.location.reload();
            }}
          >
            <div className="">
              <input
                className="inputs"
                type="text"
                defaultValue={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            <div className="text">
              <textarea
                className="inputtext"
                type="text"
                defaultValue={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              ></textarea>
            </div>
          </form>
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
          <Modal
            id={props.id}
            title={props.title}
            text={props.text}
            updateNote={props.updateNote}
          />
        </>
      ) : null}
    </div>
  );
}

export default EditNote;
