import { useState } from "react";
import "./styles.css";

export function DeleteImage(props) {
  const [show, setShow] = useState(false);

  function Modal(props) {
    return (
      <div className="modal-background">
        <div className="modalbody">
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
                props.deleteImage(props.id);
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
            image={props.image}
            description={props.description}
            editDescription={props.editDescription}
            deleteImage={props.deleteImage}
          />
        </>
      ) : null}
    </div>
  );
}

export default DeleteImage;
