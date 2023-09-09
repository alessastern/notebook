import { useState } from "react";
import "./styles.css";

function AddNote(props) {
  const [show, setShow] = useState(false);

  function Modal(props) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    return (
      <div className="modal-background">
        <div className="modalbody">
          <div className="title">
            <h2>Add a note</h2>
          </div>
          <div className="">
            <form
              id="add"
              onSubmit={(e) => {
                e.preventDefault();
                setTitle("");
                setText("");
                props.addNote(title, text);
                window.location.reload();
              }}
            >
              <div className="">
                <input
                  className="inputs"
                  type="text"
                  value={title}
                  placeholder="Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                ></input>
              </div>
              <div className="text">
                <textarea
                  className="inputtext"
                  type="text"
                  value={text}
                  placeholder="Text"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modalfooter">
            <button className="button" onClick={() => setShow(false)}>
              Cancel
            </button>
            <button className="button-save" form="add">
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="addButtonDiv">
      <button className="addButton" onClick={() => setShow(true)}>
        Add a note
      </button>
      {show ? (
        <>
          <Modal addNote={props.addNote} />
        </>
      ) : null}
    </div>
  );
}

export default AddNote;
