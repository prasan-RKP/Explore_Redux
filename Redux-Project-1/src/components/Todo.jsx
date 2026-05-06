import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

const Todo = () => {

    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();

    const [input, setInput] = useState('');


    const addTodo = () => {
        if(!input) return;
        dispatch({type: "ADD_TO", payload: {text: input.trim()}});
        setInput('');
    }

    const onDeleteTodo = (id) => {
        if(!id) return;
        dispatch({type: "DEL_TO", payload: {id}});
    }

    const onMark = (id) => {
        if(!id) return;
        dispatch({type: "MARK_TO", payload: {id}})
    }



    return (
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
            <div className="w-full max-w-md bg-zinc-900 p-6 rounded-2xl shadow-lg">

                {/* Title */}
                <h1 className="text-2xl font-semibold text-center mb-5">
                    Todo App
                </h1>

                {/* Input Section */}
                <div className="flex gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Enter todo..."
                        className="flex-1 bg-zinc-800 border border-zinc-700 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                    onClick={addTodo}
                     className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition">
                        Add
                    </button>
                </div>

                {/* Delete All */}
                <button className="w-full mt-3 bg-red-600 hover:bg-red-700 py-2 rounded-md transition">
                    Delete All
                </button>

                {/* Todo List */}
                <div className="mt-5 space-y-3">

                    {/* Empty State */}
                      {todos.length === 0 && (
                         <p className="text-center text-zinc-400">
                            No Todos Yet...
                        </p>
                      )}
                        
                
                    {/* Example Todo Item */}
                    {todos.map((todo) => (
                    <div key={todo.id} className="flex justify-between items-center bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                        <span className={`${todo.mark ? "line-through" : ""}`}>{todo.text}</span>
                        <div className="flex gap-2">
                            <button className="bg-violet-600 hover:bg-violet-700 px-3 py-1 rounded text-sm">
                                Edit
                            </button>
                            <button onClick={()=> onMark(todo.id)} className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm text-black">
                              {todo.mark ? "UnMark" : "Mark"} 
                            </button>
                            <button
                            onClick={()=> onDeleteTodo(todo.id)}
                             className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">
                                Delete
                            </button>
                        </div>
                    </div>
                    ))}

                    
                    

                </div>
            </div>
        </div>
    );
};

export default Todo;