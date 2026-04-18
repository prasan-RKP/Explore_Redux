import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {

    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    const [id, setId] = useState('');


    const addTodo = () => {
        if (!input) { alert("Todo can't be empty"); return }
        dispatch({ type: 'ADD_TODO', payload: { text: input.trim() } })
        setInput('');
    }
    const deleteALLTodo = () => {
        dispatch({ type: 'DEL_ALL' })
    }
    const markTodo = (markVal, markId) => {
        dispatch({ type: "MARK_TODO", payload: { val: markVal, id: markId } })
    }
    const deleteTodo = (todoId) => {
        dispatch({ type: 'DEL_TODO', payload: { id: todoId } })
    }



    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-sm">

            {/* Input + Add Button */}
            <div className="flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Enter todo..."
                    className="flex-1 border px-3 py-2 rounded-md outline-none"
                />
                <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Add
                </button>
            </div>

            {/* Delete All Button */}
            <div className="mt-3">
                <button onClick={deleteALLTodo} className="w-full bg-red-500 text-white py-2 rounded-md">
                    Delete All
                </button>
            </div>

            {/* Todo List (Hardcoded) */}
            <div className="mt-5 space-y-2">

                {todos?.length === 0 && (

                    <p className="text-center">No Todos Left...</p>

                )}

                {todos?.map((tod) => (
                    <div key={tod?.uid} className="flex justify-between items-center border p-2 rounded-md">
                        <span className={`${tod?.mark ? "line-through" : ""}`}>{tod?.text}</span>
                        <div className="flex gap-2">
                            <button className="bg-violet-500 text-white px-3 py-1 rounded">
                                Edit
                            </button>
                            <button onClick={() => markTodo(!tod?.mark, tod?.uid)} className="bg-yellow-500 text-white px-2 py-1 rounded">
                                {tod?.mark ? "UnMark" : "Mark"}
                            </button>
                            <button
                                onClick={() => deleteTodo(tod?.uid)}
                                className="bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Todo;
