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

export {
    billInput,
    peopleInput,
    tipInput,
    tipChosen
}