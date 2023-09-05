import "../index.css";
import Note from "./Note";
import { uuid } from "uuidv4";
import { useState } from "react";
import EditNote from "./EditNote";

function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Hello",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 2,
      title: "Hello",
      text: "World",
    },
    {
      id: 3,
      title: "Hello",
      text: "World",
    },
  ]);

  return (
    <>
      {notes.map((note) => {
        return (
          <div style={{ margin: "1rem" }}>
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
            />
          </div>
        );
      })}
    </>
  );
}

export default Notes;
