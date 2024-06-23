const defaultState = {
    selectedGames: null
}

export const SELECT_GAMES = "SELECT_GAMES"

export function gameChoiseReducer(state = defaultState, action){
    switch (action.type) {
        case SELECT_GAMES:
            return {...state, selectedGames: action.payload}
    }
    return state
}