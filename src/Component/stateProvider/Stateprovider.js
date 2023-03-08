import React, { createContext, useContext, useReducer } from "react";

//the data layer
export const stateContext = createContext();

//wrap our app and provide the data layer
export const Stateprovider = ({ reducer, initialState, children }) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);
// pull info from the data layer
export const useSateValue = () => useContext(stateContext);