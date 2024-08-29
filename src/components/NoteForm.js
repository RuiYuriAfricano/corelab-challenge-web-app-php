import React, { useState } from 'react';
import '../styles/NoteForm.css';
import { FaStar } from 'react-icons/fa';

function NoteForm({ addNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [favorite, setFavorite] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!title || !content) {
                alert("Todos os campos são obrigatórios.")
                return;
            }

            addNote({
                id: Date.now(),
                title,
                content,
                isFavorite: favorite,
                color: '#FFFFFF',
            });

            setTitle('');
            setContent('');
            setFavorite(false);
        }
    };

    return (
        <form className="note-form">
            <div>
                <input
                    className='input'
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <FaStar
                    className={`star-icon ${favorite ? 'favorite' : ''}`}
                    onClick={() => setFavorite(!favorite)}
                />
                <hr />
                <input
                    className='textarea'
                    placeholder="Criar nota..."
                    value={content}
                    type='text'
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </form>
    );
}

export default NoteForm;
