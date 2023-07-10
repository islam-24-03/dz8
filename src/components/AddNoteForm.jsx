import React from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from "../redux/sllices/notesSlice.js";

const AddNoteForm = () => {
   const dispatch = useDispatch();
   const [noteText, setNoteText] = React.useState('');

   const handleInputChange = (e) => {
      setNoteText(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (noteText.trim() !== '') {
         dispatch(addNote(noteText));
         setNoteText('');
      }
   };

   return (
       <form onSubmit={handleSubmit}>
          <input type="text" value={noteText} onChange={handleInputChange} />
          <button type="submit">Add Note</button>
       </form>
   );
};

export default AddNoteForm;
