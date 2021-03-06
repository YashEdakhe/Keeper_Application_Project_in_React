import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function createNote(note) {
  return (
    <Note
      id={note.id}
      key={note.id}
      title={note.title}
      content={note.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {Notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
