import {createStore} from 'redux';

const INI_VAL= {
    counter: 5
}


const counterReducer = (store=INI_VAL, action) => {
    switch(action.type){
        case "INC" :
            return {counter: store.counter + 1} 

        case 'DEC' :
            return  {counter: store.counter - 1} 
            
        case 'ADD' :
            return {counter: store.counter + action.payload.num}
            
        default : 
          return store    
    }
}

const counterStore = createStore(counterReducer);



export default counterStore;