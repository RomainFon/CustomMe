import {UPDATE_TEXT} from "../actions/text";

const initialText = {value : ''};

const text = (state = initialText, action) => {
    switch (action.type) {
        case UPDATE_TEXT :
            return {
                ...state,
                value: action.text
            };
        default:
            return state
    }
};

export const getText = state => state.text;

export {text}