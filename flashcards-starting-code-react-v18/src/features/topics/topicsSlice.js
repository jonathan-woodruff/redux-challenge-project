import {createSlice} from '@reduxjs/toolkit';

const options = {
    name: 'topics', //name of slice
    initialState: { //initial state of slice
        topics: {} //holds all topics keyed by ID
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuizToTopic: (state, action) => {
            const {id, topicId} = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    }
};

const topicsSlice = createSlice(options);

export const selectTopics = (state) => state.topics; //topicsSlice.getInitialState;

export const {addTopic, addQuizToTopic} = topicsSlice.actions;

export default topicsSlice.reducer;

