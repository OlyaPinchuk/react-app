import {createStore} from "redux";
import {buttonReducer} from "./reducers/stateButton";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({reducer: buttonReducer});

