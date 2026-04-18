import { createStore } from "redux";

const INI_VAL = {
  todos: [],
};

const todoReducer = (store = INI_VAL, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("Getting todo", action.payload.text);
      return {
        todos: [
          {
            text: action.payload.text,
            uid: Date.now().toString(36).slice(-4),
            mark: false,
          },
          ...store.todos,
        ],
      };

    case "DEL_TODO":
      return {
        todos: store.todos.filter((tod) => tod?.uid !== action.payload.id),
      };

    case "DEL_ALL":
      return { todos: [] };

    case "MARK_TODO":
      return {
        todos: store.todos.map((to) =>
          to?.uid === action.payload.id
            ? { ...to, mark: action.payload.val }
            : to,
        ),
      };

    default:
      return store;
  }
};

const todoStore = createStore(todoReducer);

export default todoStore;
