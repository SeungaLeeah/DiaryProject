import { configureStore} from "@reduxjs/toolkit";
import EmotionDiarySlice from "./slices/EmotionDiarySlice";

const store = configureStore({
    reducer:{
        EmotionDiary: EmotionDiarySlice
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
    devTools: true
});

export default store;