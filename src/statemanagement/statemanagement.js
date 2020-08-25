// import React, { createContext, useContext, useReducer } from "react";

// export const StateContext = createContext();

// export const StateProvider = ({ reducer, initialState, children }) => {
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>;
// };

// export const useStateValue = () => useContext(StateContext);
// export const initialState = {
//   goals: [],
//   modal: false,
//   edit: null,
//   show: null,
//   showModal: false,
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "newGoal":
//       return {
//         ...state,
//         goals: action.goals,
//       };
//     case "openModal":
//       return {
//         ...state,
//         modal: action.modal,
//         edit: action.edit,
//       };
//     case "showMessage":
//       return {
//         ...state,
//         showModal: action.show,
//         show: action.show,
//       };
//     default:
//       return state;
//   }
// };
