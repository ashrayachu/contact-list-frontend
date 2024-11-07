import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useDispatch } from 'react-redux';
import { addNote } from '../redux/reducers';

import Parser from 'html-react-parser';

function Notes({ noteData, contactId}) {
    const dispatch = useDispatch()
    const [newNote, setNewNote] = useState('');
  

    const [isFlipped, setIsFlipped] = useState(false);

    const handleAddNote = () => {
        setIsFlipped(!isFlipped); // Toggle the flipped state
        if (newNote !== '') {
            const parsedCode = Parser(newNote)
            // Dispatch the action with proper arguments (contactId and newNote)
            const action = addNote(contactId, parsedCode);
            dispatch(action); 
         }
         setNewNote(null)
     
    };
    

    // Update user with id 

    return (
        <div className="min-h-full flex flex-col w-full gap-5">
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-inner rounded-xl">

                    <div className="frontside ">
                        {noteData.length > 0 && noteData.map((notes) => (
                            <div className=' text-black text-lg flex flex-col  '>
                                <h1 className='bg-gray-700 text-white  px-5 py-2 rounded-lg '>
                                 {notes.content}
                                 </h1> 
                            </div>

                        ))} 
                       <div  />
                    </div>
                    <div className="backside">
                        <ReactQuill placeholder="Add notes here" className='text-editor w-full' theme="snow" value={newNote}  
                        onChange={(value)=>setNewNote(value)}  
                            modules={{
                                toolbar: [
                                    [{ 'list': 'bullet' }], // Enable only the bullet list option
                                ]
                            }} />
                    </div>

                </div>
            </div>
            <button
                onClick={handleAddNote}
                className="w-1/2  self-center px-4 py-2 text-sm font-medium text-blue-600 bg-transparent border border-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out flex items-center justify-center">
                 Add Note
            </button>
        </div>
    )
}

export default Notes