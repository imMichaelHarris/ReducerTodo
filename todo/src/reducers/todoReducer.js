export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return [
        ...state,
        state.map(todo => {
          return (
            todo.id === action.payload && { ...todo, completed: !todo.completed }
          );
        })
      ];
    default:
      return state;
  }
};
