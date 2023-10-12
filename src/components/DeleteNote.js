import { useState } from "react";
import "./styles.css";

export function DeleteNote(props) {
  const [show, setShow] = useState(false);

  function Modal(props) {
    return (
      <div className="modal-background" onClick={() => setShow(false)}>
        <div
          className="modalbody"
          onClick={(e) => e.stopPropagation()}
          style={{ width: "35%" }}
        >
          <div className="title">
            <h2>Are you sure?</h2>
          </div>
          <div className="modalfooter">
            <button className="button" onClick={() => setShow(false)}>
              Cancel
            </button>
            <button
              className="button-save"
              onClick={() => {
                props.deleteNote(props.id);
                window.location.reload();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button className="button" onClick={() => setShow(true)}>
        Delete
      </button>
      {show ? (
        <>
          <Modal
            id={props.id}
            title={props.title}
            text={props.text}
            updateNote={props.updateNote}
            deleteNote={props.deleteNote}
          />
        </>
      ) : null}
    </div>
  );
}

export default DeleteNote;
