import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import taskSlice from "./tasks";

export default configureStore({
    reducer: {
        user: userSlice,
        tasks: taskSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})