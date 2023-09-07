import "./index.css";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";

function App() {
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
    <>
      <div className="App">
        <AddNote addNote={addNote} />
        <Notes />
      </div>
    </>
  );
}

export default App;
