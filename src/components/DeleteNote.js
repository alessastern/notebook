import { useState } from "react";
import "./styles.css";

function DeleteNote(props) {
  const [show, setShow] = useState(false);

  function Modal(props) {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <div className="title">
            <h2>Are you sure?</h2>
          </div>
          <div className="footer">
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
