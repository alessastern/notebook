import { useState } from "react";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";

function NoteCloseup(props) {
  const [show, setShow] = useState(false);

  function Modal(props) {
    return (
      show && (
        <div className="modal-background">
          <div className="modalbody">
            <div
              className="imgsmodal"
              style={{ overflow: "auto", height: "600px" }}
            >
              <div className="title">{props.title}</div>
              <div
                className="plaintext"
                style={{
                  margin: "10px",
                  whiteSpace: "pre-wrap",
                  overflow: "auto",
                }}
              >
                {props.text}
              </div>
            </div>
            <div className="modalfooter" style={{ marginTop: "10px" }}>
              <button className="button" onClick={() => setShow(false)}>
                Close
              </button>
              <EditNote
                id={props.id}
                title={props.title}
                text={props.text}
                updateNote={props.updateNote}
              />
              <DeleteNote id={props.id} deleteNote={props.deleteNote} />
            </div>
          </div>
        </div>
      )
    );
  }

  return (
    <div style={{ marginLeft: "3px" }}>
      <button className="button" onClick={() => setShow(true)}>
        View full text
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

export default NoteCloseup;
