import "./styles.css";
import EditNote from "./EditNote";

function Note(props) {
  return (
    <div className="note">
      <div style={{ minHeight: "13rem", padding: "px", textAlign: "center" }}>
        <div
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "'Montserrat",
          }}
        >
          {props.title}
        </div>
        <div style={{ fontFamily: "'Montserrat" }}>{props.text}</div>
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
