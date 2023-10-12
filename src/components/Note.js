import "./styles.css";
import EditNote from "./EditNote";
import DeleteNote from "./DeleteNote";
import NoteCloseup from "./NoteCloseup";

function Note(props) {
  return (
    <div className="note">
      <div style={{ minHeight: "80%", padding: "5px" }}>
        <div className="title">{props.title}</div>
        <div
          className="plaintext"
          style={{
            margin: "10px",
            whiteSpace: "pre-wrap",
          }}
        >
          {props.text.length < 200
            ? props.text
            : `${props.text.slice(0, 201)}...`}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
          margin: "5px",
          padding: "5px",
        }}
      >
        <>
          <EditNote
            id={props.id}
            title={props.title}
            text={props.text}
            updateNote={props.updateNote}
          />
          <div style={{ marginLeft: "3px" }}>
            <DeleteNote id={props.id} deleteNote={props.deleteNote} />
          </div>
          {props.text.length > 200 && (
            <NoteCloseup
              id={props.id}
              title={props.title}
              text={props.text}
              updateNote={props.updateNote}
              deleteNote={props.deleteNote}
            />
          )}
        </>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "0",
            color: "var(--medium)",
          }}
        >
          {props.updated_at === props.created_at
            ? `created ${props.updated_at}`
            : `updated ${props.created_at}`}
        </div>
      </div>
    </div>
  );
}

export default Note;
