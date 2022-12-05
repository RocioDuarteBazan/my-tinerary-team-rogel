import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionActions";

const { getReaction, updateReaction, deleteReaction, getUserReactions } = reactionActions;

const initialState = {
    allReactions: [],
};

const reactionReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(getUserReactions.fulfilled, (state, action) => {
                return { ...state, allReactions: action.payload.response }
            })

            .addCase(deleteReaction.fulfilled, (state, action) => {
                let reactionDelete = state.allReactions.filter(reaction => reaction._id !== action.payload._id)
                return { ...state, allReactions: reactionDelete }
            })
    })

export default reactionReducer;