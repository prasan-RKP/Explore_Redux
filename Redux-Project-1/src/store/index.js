// import {createStore} from 'redux';

// const INI_VAL= {
//     todos: []
// }


// const counterReducer = (store=INI_VAL, action) => {
//     switch(action.type){

//         // commnet out all to see counter question
        
//         case "INC" :
//             return {counter: store.counter + 1} 
//      const counter = useSelector(store => store.counter);

//         case 'DEC' :
//             return  {counter: store.counter > 0 ? store.counter - 1 : 0} 
            
//         case 'ADD' :
//             return {counter: store.counter + action.payload.num}

//         case 'RESET': {
//             return {counter: store.counter = 0}
//         }    
//         default : 
//           return store    
//     }
// }

// const counterStore = createStore(counterReducer);

// export default counterStore;