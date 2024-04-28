export default (state, action) => {
    switch(action.type) {
        // Fetch transactions from the server
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                // Ensure payload is an array before assigning
                transactions: Array.isArray(action.payload) ? action.payload : []
            };
        
        // Delete a transaction by ID
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            };
        
        // Add a new transaction
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };
        
        // Handle transaction errors
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            };
        
        // Default case returns the current state
        default:
            return state;
    }
}
