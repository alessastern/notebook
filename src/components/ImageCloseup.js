import DeleteImage from "./DeleteImage";
import { useState } from "react";

function ImageCloseup(props) {
  const [show, setShow] = useState(props.show);
  const [edit, showEdit] = useState(false);
  const [descr, setDescr] = useState(props.description);

  return (
    show && (
      <div
        className="modal-background"
        onClick={() => props.setShowModal(false)}
      >
        <div className="dialogModal" onClick={(e) => e.stopPropagation()}>
          <div className="modalzoomcont">
            <img
              className="imgsmodal"
              src={props.image}
              alt="something"
              style={{
                borderRadius: "10px",
              }}
              onClick={() => {
                props.setShowModal(false);
                showEdit(false);
              }}
            />
            <div className="column1">
              {edit ? (
                <>
                  <form
                    id="editdesc"
                    onSubmit={(e) => {
                      e.preventDefault();
                      props.editDescription(props.id, descr);
                      window.location.reload();
                    }}
                  >
                    <textarea
                      className="editDescription"
                      type="text"
                      defaultValue={descr}
                      onChange={(e) => setDescr(e.target.value)}
                    ></textarea>
                  </form>
                </>
              ) : (
                <p
                  className="flexdescription"
                  style={{
                    alignSelf: "center",
                    width: "200px",
                    padding: "5px",
                  }}
                  onClick={() => showEdit(true)}
                >
                  {props.description}
                </p>
              )}
            </div>
          </div>
          <div className="modalfooter" style={{ marginTop: "5px" }}>
            {edit && (
              <>
                <button className="button-save" onClick={() => showEdit(false)}>
                  Cancel
                </button>
                <button className="button-save" form="editdesc">
                  Save
                </button>
              </>
            )}
            {!edit && (
              <>
                <button className="button" onClick={() => showEdit(true)}>
                  Edit
                </button>
                <DeleteImage id={props.id} deleteImage={props.deleteImage} />
                <button
                  className="button"
                  onClick={() => props.showImage(props.image)}
                >
                  Fullsize
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default ImageCloseup;
