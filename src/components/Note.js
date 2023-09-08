import "./styles.css";
import EditNote from "./EditNote";
import DeleteNote from "./DeleteNote";

function Note(props) {
  return (
    <div className="note">
      <div style={{ minHeight: "13rem", padding: "5px", textAlign: "center" }}>
        <div className="title">{props.title}</div>
        <div
          style={{
            fontFamily: "'Montserrat",
            fontWeight: "bold",
            margin: "2rem",
          }}
        >
          {props.text}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          margin: "1rem",
          marginLeft: "1rem",
        }}
      >
        <EditNote
          id={props.id}
          title={props.title}
          text={props.text}
          updateNote={props.updateNote}
        />
        <DeleteNote id={props.id} deleteNote={props.deleteNote} />
      </div>
    </div>
  );
}

export default Note;
