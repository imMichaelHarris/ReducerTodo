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
        ...state.map(todo =>
          action.payload === todo.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      ];
    case "CLEAR_COMPLETED":
      return [...state.filter(todo => !todo.completed)];
    default:
      return state;
  }
};
