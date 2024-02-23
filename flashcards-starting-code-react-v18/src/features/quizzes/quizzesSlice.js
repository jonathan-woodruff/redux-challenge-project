import {createSlice} from '@reduxjs/toolkit';

const options = {
    name: 'quizzes', //name of slice
    initialState: { //initial state of slice
        quizzes: {} //holds all quizzes keyed by ID
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    }
};

const quizzesSlice = createSlice(options);

export const selectQuizzes = (state) => state.quizzes;

export const {addQuiz} = quizzesSlice.actions;

export default quizzesSlice.reducer;