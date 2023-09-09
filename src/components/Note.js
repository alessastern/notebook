import "./styles.css";
import EditNote from "./EditNote";
import DeleteNote from "./DeleteNote";

function Note(props) {
  return (
    <div className="note">
      <div style={{ minHeight: "13rem", padding: "5px" }}>
        <div className="title">{props.title}</div>
        <div
          style={{
            fontFamily: "'Montserrat",
            fontWeight: "bold",
            margin: "2rem",
            whiteSpace: "pre-wrap",
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
        </>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "0",
            color: "rosybrown",
          }}
        >
          {props.updated_at}
        </div>
      </div>
    </div>
  );
}

export default Note;
