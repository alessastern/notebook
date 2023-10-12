import { useState } from "react";
import "../components/styles.css";
import ImageCloseup from "../components/ImageCloseup";

function Image(props) {
  const [showModal, setShowModal] = useState(false);

  const renderModal = (showModal, props) => {
    if (showModal)
      return (
        <ImageCloseup
          show={showModal}
          setShowModal={setShowModal}
          id={props.id}
          image={props.image}
          description={props.description}
          editDescription={props.editDescription}
          showImage={props.showImage}
          deleteImage={props.deleteImage}
        />
      );
  };

  return (
    <>
      {showModal && renderModal(showModal, props)}
      <div className="imgcontainer">
        <img
          className="imgs"
          src={props.image}
          alt="something"
          style={{ width: "100%", borderRadius: "10px" }}
          onClick={() => {
            setShowModal(true);
          }}
        />
        <div style={{ margin: "auto" }}>
          <p className=" descriptions plaintext">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Image;
