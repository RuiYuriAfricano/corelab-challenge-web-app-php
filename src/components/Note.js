import React, { useState } from 'react';
import '../styles/Note.css';
import { FaStar, FaEdit, FaPalette, FaTimes } from 'react-icons/fa';

function Note({ note, toggleFavorite, deleteNote, editNote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(note.content);
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        editNote(note.id, { content: newContent });
        setIsEditing(false);
    };

    const handleColorChange = (color) => {
        editNote(note.id, { color });
        setShowColorPicker(false);
    };

    return (
        <div className="note" style={{ backgroundColor: note.color }}>
            <div className="note-header">
                <h3>{note.title}</h3>
                <FaStar
                    className={`star-icon ${note.isFavorite ? 'favorite' : ''}`}
                    onClick={() => toggleFavorite(note.id)}
                />
            </div>
            {isEditing ? (
                <textarea
                    className='edit-content'
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                />
            ) : (
                <p>{note.content}</p>
            )}

            <div className="note-footer">
                <FaEdit className='edit' onClick={handleEdit} />
                {isEditing ? <button className='guardar' onClick={handleSave}>Guardar</button> : null}
                <FaPalette className='palette' onClick={() => setShowColorPicker(!showColorPicker)} />
                {showColorPicker && (
                    <div className="color-picker">
                        {[
                            '#BAE2FF', '#B9FFDD', '#FFE8AC',
                            '#FFCAB9', '#F99494', '#9DD6FF', '#ECA1FF',
                            '#DAFF8B', '#FFA285', '#CDCDCD', '#979797', '#A99A7C'].map(color => (
                                <div
                                    key={color}
                                    className="color-swatch"
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorChange(color)}
                                />
                            ))}
                    </div>
                )}
                <FaTimes className='remove' onClick={() => deleteNote(note.id)} />
            </div>
        </div>
    );
}

export default Note;
