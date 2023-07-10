import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const addNote = createAsyncThunk(
   'notes/addNote',
   async (noteText, { rejectWithValue }) => {
      try {
         const response = await fetch('https://dummyjson.com/api/note', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: noteText }),
         });

         if (!response.ok) {
            throw new Error('Failed to add note');
         }

         const data = await response.json();
         return data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);


const notesSlice = createSlice({
   name: 'notes',
   initialState: [],
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(addNote.fulfilled, (state, action) => {
         state.push(action.payload);
      });
   },
});

export default notesSlice.reducer;
