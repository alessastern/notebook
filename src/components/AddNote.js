import { useState } from "react";
import "./styles.css";

function AddNote(props) {
  const [show, setShow] = useState(false);

  function Modal(props) {
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
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
                setImage("");
                setDescription("");
                props.addNote(image, description);
                window.location.reload();
              }}
            >
              <div className="">
                <input
                  className="inputs"
                  type="file"
                  value={image}
                  placeholder="Title"
                  onChange={(e) => {
                    setImage(e.target.files);
                  }}
                ></input>
              </div>
              <div>
                <textarea
                  className="inputtext"
                  type="text"
                  value={description}
                  placeholder="Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
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
