import { GET_TRANSACTIONS, ADD_TRANSACTION, DELETE_TRANSACTION } from "../actions/types"

const initalState = {
    transactions: [
        { id: 1, coin: 'SOL', date: '20/02/2021', units: '50', pricePerUnit: '20' },
        { id: 2,coin: 'BTC', date: '02/02/2015', units: '20.5', pricePerUnit: '500' },
        { id: 3,coin: 'ETH', date: '20/02/2021', units: '30.23', pricePerUnit: '1400' }
    ]
}

const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state,
            }
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            case ADD_TRANSACTION:
            return {
                ...state,
                
            }
        default:
            return state
    }
}

export default rootReducer