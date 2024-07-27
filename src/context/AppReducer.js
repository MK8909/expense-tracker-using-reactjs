export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)   //transactions array k effect korbe
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,    //keeping states unchanged
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }