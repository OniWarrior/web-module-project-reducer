export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_MEMORY_VALUE = 'SET_MEMORY_VALUE';
export const APPLY_MEMORY_VALUE = 'APPLY_MEMORY_VALUE';
export const RESET_MEMORY_VALUE = 'RESET_MEMORY_VALUE';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation=(operator)=>{
    return({type:CHANGE_OPERATION,payload:operator});
}

export const clearDisplay=()=>{
    return ({type:CLEAR_DISPLAY});
}

export const setMemoryValue=(number)=>{
    return ({type:SET_MEMORY_VALUE, payload:number})
}

export const applyMemoryValue = (number)=>{
    return({type:APPLY_NUMBER, payload:number})
}

export const resetMemoryValue=()=>{
    return ({type:RESET_MEMORY_VALUE});
}