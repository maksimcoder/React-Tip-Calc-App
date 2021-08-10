const initialState = {
    activeTipPlate: null,
    bill: '',
    people: '',
    total: 0,
    tip: 0,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BILL_INPUT':
            return {
                ...state,
                bill: +action.value
            };
        case 'PEOPLE_INPUT':

            return {
                ...state,
                people: +action.value
            }
        case 'TIP_CHOSEN':
            if (!isFinite(action.value)) {
                console.log(action.value);
                const {value} = action.value.props;
                return {
                    ...state,
                    activeTipPlate: action.id,
                    tip: +value
                }
            }
            return {
                ...state,
                activeTipPlate: action.id,
                tip: action.value
            }
        case 'TIP_INPUT':

            return {
                ...state,
                tip: +action.value
            }
        default:
            return state;  
    }
}

export default reducer;

//formula

// (total + (total/100*tipPerc))/people