/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
{/*this component is for adding new note in our notes application*/ }
function AddNote({ handleAddNote }) {
    {/*this noteText is the value for adding Note input*/ }
    const [noteText, setNoteText] = useState('');
    {/*here I have fixed the note input limit with 300 characters , but you can change this
    limit*/}
    const charLimit = 300;
    {/*this function is defined for the onChange event of out adding note input*/ }
    const handleChange = (event) => {
        {/*with typing the character limit will change with the input text's length*/ }
        if (charLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }

    }
    {/*this is for saving the new note*/ }

    const handleSaveClick = () => {
        {/*if there's no character in input , then we will not save the note*/ }
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }

    }
    return (
        <div className="note new">
            {/*the text area for our input*/}
            <textarea cols="10" rows="8" placeholder="Type to add a new note..."
                onChange={handleChange} value={noteText}
            ></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
