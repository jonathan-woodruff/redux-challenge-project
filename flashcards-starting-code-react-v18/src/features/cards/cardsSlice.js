import {createSlice} from '@reduxjs/toolkit';

const options = {
    name: 'cards', //name of slice
    initialState: { //initial state of slice
        cards: {} //holds all quizzes keyed by ID
    },
    reducers: {
        addCard: (state, action) => {
            const {id, front, back} = action.payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back
            }
        }
    }
};

const cardsSlice = createSlice(options);

export const selectCardById = (state) => state.cards;

export const {addCard} = cardsSlice.actions;

export default cardsSlice.reducer;