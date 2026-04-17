import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

    const [number, setNumber] = useState('');

  const counter =  useSelector(store => store.counter);
   const dispatch = useDispatch();

   const handleInc = () => {dispatch({type: 'INC'})};
   const handleDec = () => {dispatch({type: 'DEC'})};
   const handleAddNum = () => {
         if(number === undefined) return;
         dispatch({type: "ADD", payload: {num: Number(number)}});
         setNumber('');
   }

   const handleReset = () => {dispatch({type: "RESET"})};


    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center">

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-10 text-center">

                <h1 className="text-3xl font-bold text-white mb-6 tracking-wide">
                    Counter App
                </h1>

                <p className="text-gray-300 text-xl mb-8">
                    Counter Value: <span className="text-white font-semibold">{counter}</span>
                </p>

                <input value={number} onChange={(e)=> setNumber(e.target.value)} type="text" className='bg-gray-400 h-10 rounded-lg text-black pl-4 mb-5 mr-5'/>

                <button onClick={handleAddNum} className='px-5 py-3 bg-gray-400 rounded-lg'>Add</button>

                <div className="flex justify-center items-center gap-6">

                    <button onClick={handleInc} className="px-8 py-3 bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 rounded-xl text-white font-semibold shadow-lg">
                        +1
                    </button>

                    <button onClick={handleDec} className="px-8 py-3 bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-200 rounded-xl text-white font-semibold shadow-lg">
                        -1
                    </button>

                    <button onClick={handleReset} className="px-8 py-3 bg-violet-600 hover:bg-violet-700 active:scale-95 transition-all duration-200 rounded-xl text-white font-semibold shadow-lg">
                        Reset
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Counter;
