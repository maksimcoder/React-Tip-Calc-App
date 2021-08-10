const initialState = {
    activeTipPlate: null,
    bill: '',
    people: '',
    total: 0,
    tip: 0,
    tipAmount: 0,
    error: false
}

const reducer = (state = initialState, action) => {
    const {total, bill, people, tip} = state;
    switch (action.type) {
        case 'BILL_INPUT':
            return {
                ...state,
                bill: action.value
            };
        case 'PEOPLE_INPUT':

            return {
                ...state,
                people: action.value
            }
        case 'TIP_CHOSEN':
            if (!isFinite(action.value)) {

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

        case 'SHOW_TOTAL':
            if (+bill === 0 || +people === 0) {
                return {
                    ...state,
                    total: 0
                }
            }
            return {
                ...state,
                total: Math.round(+state.bill / +state.people)
            }
        case 'SHOW_TIP':
            if (+people === 0 || +total === 0) {
                return {
                    ...state,
                    tipAmount: 0
                }
            }
            return {
                ...state,
                // tipAmount: (+total + (+total / 100 * +tip)) / +people
                tipAmount: Math.round((+total / 100 * +tip) / +people)
            };
        case 'RESET': 
            return {
                ...initialState
            }
        default:
            return state;  
    }
}

export default reducer;

//formula

// (total + (total/100*tipPerc))/people