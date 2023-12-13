import { createSlice } from '@reduxjs/toolkit'
import { IListItem } from '../types/interfaces'
import { getTag } from '../helpers/getTag'

export const notesSlice = createSlice({
   name: 'notes',
   initialState: {
      data: [] as IListItem[],
      tags: [] as string[],
      filteredData: [] as IListItem[],
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
      },
      addTags: (state, action) => {
         state.tags = [...new Set(state.tags.concat(action.payload))]
      },
      filterByTags: (state, action) => {
         state.filteredData.push(...state.data.filter(item => item.tag.includes(action.payload)))

         if (action.payload == '') {
            const index: number = state.filteredData.findIndex(item => item.tag.includes(action.payload))

            state.filteredData.splice(index, 1)
         }
      }
   }
})

export const { addNote, addTags, deleteNote, filterByTags } = notesSlice.actions
export const notesReducer = notesSlice.reducer