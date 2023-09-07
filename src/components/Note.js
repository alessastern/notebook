import "./styles.css";
import EditNote from "./EditNote";

function Note(props) {
  return (
    <div className="note">
      <div style={{ minHeight: "13rem", padding: "px", textAlign: "center" }}>
        <div className="title">{props.title}</div>
        <div style={{ fontFamily: "'Montserrat", fontWeight: "bold" }}>
          {props.text}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          margin: "1rem",
        }}
      >
        <EditNote
          id={props.id}
          title={props.title}
          text={props.text}
          updateNote={props.updateNote}
        />
      </div>
    </div>
  );
}

export default Note;
