const defaultState = {
    value: ''
}
export const SETVALUE = 'SETVALUE'

export function nameReducer(state = defaultState, action){
    switch(action.type){
        case SETVALUE:
            return {...state, value: action.payload}
    }
    return state
}


