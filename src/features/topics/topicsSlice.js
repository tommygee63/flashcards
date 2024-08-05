import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';

const initialState = {topics:{}}

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic(state, action) {
            state.topics[action.payload.id] = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuiz, (state, action) => {
                state.topics[action.payload.topicId].quizIds.push(action.payload.id)
            })
    }
});

export const topicsSelector = (state) => {
    return state.topics.topics;
};

export const {addTopic} = topicsSlice.actions;

export default topicsSlice.reducer;