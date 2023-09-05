import "../index.css";
import Note from "./Note";
import { uuid } from "uuidv4";
import { useState, useEffect } from "react";
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

  // const [notes, setNotes] = useState();

  // useEffect(() =>
  //   fetch("http://127.0.0.1:8000/api/notes/").then((response) =>
  //     response.json().then((data) => setNotes(data))
  //   )
  // );

  function editNotes(id, newTitle, newText) {
    const updatedNotes = notes.map((note) => {
      if (id == note.id) return { ...note, title: newTitle, text: newText };
      return note;
    });
  }

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
