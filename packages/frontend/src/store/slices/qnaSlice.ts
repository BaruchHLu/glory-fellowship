import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface QnaState {
  loading: boolean;
  question: string;
  answer: string | null;
  error: string | null;
}

const initialState: QnaState = {
  loading: false,
  question: "",
  answer: null,
  error: null,
};

// Async thunk to fetch AI-generated answers
export const fetchAnswer = createAsyncThunk(
  "qna/fetchAnswer",
  async (question: string, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/qna/ask", { question });
      return response.data.answer;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);

const qnaSlice = createSlice({
  name: "qna",
  initialState,
  reducers: {
    setQuestion(state, action) {
      state.question = action.payload;
    },
    clearAnswer(state) {
      state.answer = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnswer.pending, (state) => {
        state.loading = true;
        state.answer = null;
        state.error = null;
      })
      .addCase(fetchAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.answer = action.payload;
      })
      .addCase(fetchAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setQuestion, clearAnswer } = qnaSlice.actions;
export default qnaSlice.reducer;
