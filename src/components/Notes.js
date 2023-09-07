import "../index.css";
import Note from "./Note";
import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState();

  useEffect(() => getNotes(), []);

  const getNotes = () => {
    fetch("http://127.0.0.1:8000/api/notes/").then((response) =>
      response.json().then((data) => setNotes(data))
    );
  };

  const updateNote = (id, title, text) => {
    let obj = {};
    obj.title = title;
    obj.text = text;
    fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  };

  return (
    <div>
      <>
        {notes
          ? notes.map((note) => {
              return (
                <Note
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  text={note.text}
                  updateNote={updateNote}
                />
              );
            })
          : null}
      </>
    </div>
  );
}

export default Notes;
