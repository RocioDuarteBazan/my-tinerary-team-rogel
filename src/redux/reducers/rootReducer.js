import citiesReducer from "./citiesReducer";
import hotelsReducer from "./hotelsReducers";
import commentsReducers from './commentsReducers';
import userReducer from "./userReducer";
import reactionReducer from './reactionReducer';


const rootReducer = {
    citiesReducer,
    hotelsReducer,
    userReducer,
    commentsReducers,
    reactionReducer,
};

export default rootReducer;