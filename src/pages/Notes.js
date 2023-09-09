import "../index.css";
import Note from "../components/Note";
import { useState, useEffect } from "react";
import AddNote from "../components/AddNote";
import Footer from "../components/Footer";

function Notes() {
  const [notes, setNotes] = useState();

  useEffect(() => {
    getNotes();
  }, []);

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

  const deleteNote = (id) => {
    fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      method: "DELETE",
      headers: {},
    });
  };

  const addNote = (title, text) => {
    let obj = {};
    obj.title = title;
    obj.text = text;
    fetch("http://127.0.0.1:8000/api/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  };

  return (
    <div>
      <AddNote addNote={addNote} />
      <>
        {notes
          ? notes.map((note) => {
              return (
                <Note
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  text={note.text}
                  updated_at={note.updated_at}
                  updateNote={updateNote}
                  deleteNote={deleteNote}
                />
              );
            })
          : null}
      </>
      <Footer />
    </div>
  );
}

export default Notes;
