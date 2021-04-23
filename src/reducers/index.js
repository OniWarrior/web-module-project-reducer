import { ADD_ONE, 
    APPLY_NUMBER, 
    CHANGE_OPERATION, 
    CLEAR_DISPLAY, 
    SET_MEMORY_VALUE,
    APPLY_MEMORY_VALUE, 
    RESET_MEMORY_VALUE} from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory:0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
        case("CE"):
            return 0;    
        case ('M+'):
            return num1; // this is the current value to be set to memory
        

            
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total:0
            })
        case(SET_MEMORY_VALUE):
            return ({
                ...state,
                memory:action.payload
            })
        case(APPLY_MEMORY_VALUE):
            return ({
                ...state,
                total: calculateResult(state.total, action.payload, state.operation)
            }) 
        case(RESET_MEMORY_VALUE):
            return({
                ...state,
                memory:0
            })
            
        default:
            return state;
    }
}

export default reducer;



