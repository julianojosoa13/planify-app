import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        data: null
    },
    reducers: {
        setTasks: (state, action) => {
            state.data = action.payload
        },
        setToUpdate: (state, action) => {
            
        }
    }
})

export const {setTasks, setToUpdate} = taskSlice.actions;

export default taskSlice.reducer