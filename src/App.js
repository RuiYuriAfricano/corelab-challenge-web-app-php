import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './styles/index.css';
import { todo } from './services/todo';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await todo.listar();
      if (response.status === 200) {
        setNotes(response.data.data);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async (newNote) => {
    const noteData = {
      title: newNote.title,
      content: newNote.content,
      isFavorite: newNote.isFavorite || false,
      color: newNote.color,
    };
    const response = await todo.create(noteData);
    if (response.status === 201) {
      setNotes([response.data.data, ...notes]);
    }
  };

  const toggleFavorite = async (id) => {
    const noteToUpdate = notes.find(note => note.id === id);
    const updatedNote = { ...noteToUpdate, isFavorite: !noteToUpdate.isFavorite };

    const response = await todo.update(updatedNote, id);
    if (response.status === 200) {
      setNotes(notes.map(note => note.id === id ? response.data.data : note));
    }
  };

  const deleteNote = async (id) => {
    const response = await todo.excluir(id);
    if (response.status === 200) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  const editNote = async (id, updatedNote) => {
    const response = await todo.update(updatedNote, id);
    if (response.status === 200) {
      setNotes(notes.map(note => note.id === id ? response.data.data : note));
    }
  };


  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchWord.toLowerCase()) ||
    note.content.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header setSearchWord={setSearchWord} />
      <NoteForm addNote={addNote} />
      <NoteList
        notes={filteredNotes}
        toggleFavorite={toggleFavorite}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
}

export default App;
