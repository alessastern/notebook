import { useState } from "react";

function AddImage(props) {
  const [show, setShow] = useState(false);

  function Modal(props) {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const form = document.getElementById("add");

    return (
      <div className="modal-background">
        <div className="modalbody">
          <div className="title">
            <h2>Add an image</h2>
          </div>
          <div className="">
            <form
              id="add"
              onSubmit={(e) => {
                const formData = new FormData(form);
                console.log(...formData);
                e.preventDefault();
                setImage(null);
                setDescription("");
                props.addImage(...formData);
                // window.location.reload();
              }}
            >
              <div className="">
                <label style={{ fontFamily: "Montserrat" }}>
                  Image file
                  <input
                    name="image"
                    className="inputs"
                    type="file"
                    accept="image/*"
                  ></input>
                </label>
              </div>
              <div className="">
                <textarea
                  name="description"
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
        Add an image
      </button>
      {show ? (
        <>
          <Modal addImage={props.addImage} />
        </>
      ) : null}
    </div>
  );
}

export default AddImage;
