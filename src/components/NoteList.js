import React from 'react';
import Note from './Note';
import '../styles/NoteList.css';

function NoteList({ notes, toggleFavorite, deleteNote, editNote }) {
    const favoriteNotes = notes.filter(note => note.isFavorite);
    const otherNotes = notes.filter(note => !note.isFavorite);

    return (
        <div className="note-list">
            {favoriteNotes.length > 0 && <h5>Favoritas</h5>}
            <div className="notes-grid">
                {favoriteNotes.map(note => (
                    <Note
                        key={note.id}
                        note={note}
                        toggleFavorite={toggleFavorite}
                        deleteNote={deleteNote}
                        editNote={editNote}
                    />
                ))}
            </div>

            {otherNotes.length > 0 && <h5>Outras</h5>}
            <div className="notes-grid">
                {otherNotes.map(note => (
                    <Note
                        key={note.id}
                        note={note}
                        toggleFavorite={toggleFavorite}
                        deleteNote={deleteNote}
                        editNote={editNote}
                    />
                ))}
            </div>
        </div>
    );
}

export default NoteList;
