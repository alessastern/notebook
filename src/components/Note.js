import "./styles.css";
import EditNote from "./EditNote";

function Note(props) {
  return (
    <div className="note">
      <div style={{ minHeight: "13rem", padding: "px", textAlign: "center" }}>
        <div style={{ fontSize: "40px", fontWeight: "bold" }}>
          {props.title}
        </div>
        <div>{props.text}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "left", margin: "1rem" }}>
        <EditNote title={props.title} text={props.text} />
      </div>
    </div>
  );
}

export default Note;
