import {SHOW_STATE_BUTTON} from "../action-types";

const initialState = {
    stateButton: false
};

export const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_STATE_BUTTON: {
            return {stateButton: true}
        }
    }

    return state;
}