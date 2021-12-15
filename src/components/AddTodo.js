import React, { useState } from 'react'

function AddTodo({ onAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);

    function onSubmit (e) {
        e.preventDefault();

        if(!title || !description) {
            alert('Please add a title and descriptioin');
            return false;
        }else{
            onAdd({title, description, status});

            setTitle('');
            setDescription('');
            setStatus(false);
        }
    }

    return (
        <form className="add-form" onSubmit={onSubmit} > 
            <div className="fieldset">
                <div className="field">
                    <label>Title</label>
                    <input type="text" 
                        placeholder="Add Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" 
                        placeholder="Add Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="field checkbox hidden">
                    <label>Status</label>
                    <input type="checkbox"
                        checked={status}
                        value={status}
                        onChange={(e) => setStatus(e.currentTarget.checked)}
                    />
                </div>
                <input type="submit" value="Save" className="btn-submit primary dark"/>
            </div>
        </form>
    )
}

export default AddTodo;
