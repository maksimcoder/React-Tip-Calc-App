const billInput = (value) => {
    return {
        type: 'BILL_INPUT',
        value
    }
}

const peopleInput = (value) => {
    return {
        type: 'PEOPLE_INPUT',
        value
    }
}

const tipInput = (value) => {
    return {
        type: 'TIP_INPUT',
        value
    }
}

const tipChosen = (id, value) => {
    return {
        type: 'TIP_CHOSEN',
        id,
        value
    }
}

const showTotal = () => {
    return {
        type: 'SHOW_TOTAL'
    }
}

const showTip = () => {
    return {
        type: 'SHOW_TIP'
    }
}

const resetAll = () => {
    return {
        type: 'RESET'
    }
}

export {
    billInput,
    peopleInput,
    tipInput,
    tipChosen,
    showTotal,
    showTip,
    resetAll
}