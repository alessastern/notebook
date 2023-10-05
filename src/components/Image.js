import { useState } from "react";
import "../components/styles.css";
import DeleteImage from "./DeleteImage";

function Image(props) {
  const [show, setShow] = useState(false);
  const [edit, showEdit] = useState(false);
  const [descr, setDescr] = useState(props.description);
  const [del, showDel] = useState(false);

  return (
    <div className="imgcontainer">
      <img
        className="imgs"
        src={props.image}
        alt="something"
        style={{ width: "100%", borderRadius: "10px" }}
        onClick={() => setShow(true)}
      />
      {show && (
        <dialog id="dialog" open>
          <div className="modalzoomcont">
            <img
              className="imgsmodal"
              src={props.image}
              alt="something"
              style={{
                borderRadius: "10px",
              }}
              onClick={() => {
                setShow(false);
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
                  className="descriptions plaintext"
                  style={{
                    alignSelf: "center",
                    width: "200px",
                  }}
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
        </dialog>
      )}
      <div style={{ margin: "auto" }}>
        <p className=" descriptions plaintext">{props.description}</p>
      </div>
    </div>
  );
}

export default Image;
