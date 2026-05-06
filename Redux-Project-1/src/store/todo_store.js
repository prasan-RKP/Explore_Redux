import { createStore } from "redux"

const INI_VAL = {
  todos: []
}


const todoReducer = (store = INI_VAL, action) => {

  switch(action.type){
    case 'ADD_TO':
      return {
        todos: [
          {id: Date.now().toString(36).slice(-4),
            text: action.payload.text,
            mark: false,

          },
          ...store.todos
        ]
      };

    case 'DEL_TO':
      return {
        todos: store.todos.filter((tod)=> tod.id !== action.payload.id)
      }
      
    case 'MARK_TO':
      return {
        todos: store.todos.map((to) => to.id === action.payload.id ?
        {...to, mark: !to.mark}: to )
      }
      
      default :
       return store
  }

}

const todoStore = createStore(todoReducer);

export default todoStore;