import citiesReducer from "./citiesReducer";
import hotelsReducer from "./hotelsReducers";
import userReducer from "./userReducer"
import commentsReducers from './commentsReducers';

const rootReducer = {
    citiesReducer,
    hotelsReducer,
    userReducer,
    commentsReducers
};

export default rootReducer;