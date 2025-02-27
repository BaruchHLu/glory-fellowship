import { configureStore } from "@reduxjs/toolkit";
import qnaReducer from "./slices/qnaSlice";

export const store = configureStore({
  reducer: {
    qna: qnaReducer, // Add more reducers here later
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
