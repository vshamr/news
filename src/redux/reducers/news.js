import {SET_POPULAR_NEWS, SET_LATEST_NEWS} from "../constants";

const initialState = {
    latestNews: [],
    popularNews: [],
};

export const news = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LATEST_NEWS:
            return {
                ...state,
                latestNews: payload,
            };
        case SET_POPULAR_NEWS:
            return {
                ...state,
                popularNews: payload
            };

        default: return state;
    }
};