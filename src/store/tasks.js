import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        data: null,
        toUpdate: null,
    },
    reducers: {
        setTasks: (state, action) => {
            state.data = action.payload
        },
        setToUpdate: (state, action) => {
            console.log('changing toUpdate value...')
            state.toUpdate = Math.random()
        }
    }
})

export const {setTasks, setToUpdate} = taskSlice.actions;

export default taskSlice.reducer