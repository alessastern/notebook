import "./Note.css";

function Note(props) {
  return (
    <div className="note">
      <div
        style={{ minHeight: "13rem", padding: "auto", alignContent: "center" }}
      >
        <div style={{ fontSize: "40px", fontWeight: "bold" }}>
          {props.title}
        </div>
        <div>{props.text}</div>
      </div>
      <button className="button">Edit</button>
    </div>
  );
}

export default Note;
