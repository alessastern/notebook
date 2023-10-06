import "../index.css";
import Note from "../components/Note";
import { useState, useEffect, useContext } from "react";
import AddNote from "../components/AddNote";
import AuthContext from "../context/AuthContext";

function Notes() {
  const [notes, setNotes] = useState();
  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    fetch("http://127.0.0.1:8000/api/notes/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("something went wrong");
      })
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => alert(error));
  };

  const updateNote = (id, title, text) => {
    let obj = {};
    obj.title = title;
    obj.text = text;
    fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
      body: JSON.stringify(obj),
    });
  };

  const deleteNote = (id) => {
    fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${authTokens.access}` },
    });
  };

  const addNote = (title, text) => {
    let obj = {};
    obj.title = title;
    obj.text = text;
    fetch("http://127.0.0.1:8000/api/notes/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authTokens.access}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  };

  return (
    <div className="pagecontainer">
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
                  created_at={note.created_at}
                  updated_at={note.updated_at}
                  updateNote={updateNote}
                  deleteNote={deleteNote}
                />
              );
            })
          : null}
      </>
    </div>
  );
}

export default Notes;
