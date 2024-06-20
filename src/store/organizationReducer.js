const defaultState = {
    selectedCountry: null
}

export const SELECT_COUNTRY = "SELECT_COUNTRY"

export function organizationReducer(state = defaultState, action) {
    switch (action.type) {
        case SELECT_COUNTRY:
            return {...state, selectedCountry: action.payload}
    }
    return state
}

