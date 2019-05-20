import {UPDATE_GLASSES, UPDATE_HAT, UPDATE_IMAGE, UPDATE_ZOOM_GLASSES, UPDATE_ZOOM_HAT} from "../actions/people";

const initialPeople = {img : '', glasses : '', zoomGlasses: 0.5, hat : '', zoomHat: 0.5,};

const people = (state = initialPeople, action) => {
    switch (action.type) {
        case UPDATE_IMAGE :
            return {
                ...state,
                img: action.imgUrl
            };
        case UPDATE_GLASSES :
            return {
                ...state,
                glasses: action.glassesUrl
            };
        case UPDATE_ZOOM_GLASSES :
            return {
                ...state,
                zoomGlasses: action.zoomGlasses
            };
        case UPDATE_HAT :
            return {
                ...state,
                hat: action.hatUrl
            };
        case UPDATE_ZOOM_HAT :
            return {
                ...state,
                zoomHat: action.zoomHat
            };
        default:
            return state
    }
};

export const getPeople = state => state.people;

export {people}