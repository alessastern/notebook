import { useState } from "react";
import "./EditNote.css";

function EditNote(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal className="modal" show={show} onHide={handleClose}></Modal>
    </>
  );
}

export default EditNote;
