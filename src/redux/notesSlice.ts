import { createSlice } from '@reduxjs/toolkit'
import { IListItem } from '../types/interfaces'
import { getTag } from '../helpers/getTag'

export const notesSlice = createSlice({
   name: 'notes',
   initialState: {
      data: [] as IListItem[]
   },
   reducers: {
      addNote: (state, action) => {
         const note: IListItem = {
            id: Date.now(),
            text: action.payload,
            tag: getTag(action.payload),
         }

         state.data.push(note)
      },
      deleteNote: (state, action) => {
         state.data = state.data.filter(item => item.id !== action.payload)
      }
   }
})

export const { addNote, deleteNote } = notesSlice.actions
export const notesReducer = notesSlice.reducer