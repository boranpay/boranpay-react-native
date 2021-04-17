import produce from 'immer'

const initialState = {
    transactions: [],
}


export default produce((draft, action = {}) => {
    switch (action.type) {
        case 'GET_ALL_TRANSACTIONS_USER':
            draft.transactions = action.payload
            return
        case 'GET_ALL_TRANSACTION_USER_RECEV':
            draft.transactions = action.payload
        default:
    }
},
    initialState
)
