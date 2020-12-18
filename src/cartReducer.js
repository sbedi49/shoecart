
const reducer = (state,action)=> {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart:[...state.cart,action.item]
            }
        case "REMOVE_FROM_CART":
            console.log(state.cart[0].id);
            const index = state.cart.findIndex(
                (item) => item.id === action.id
            )
            let newCart = [...state.cart]
            if (index >= 0) {
                newCart.splice(index,1)
            } else {
                console.log('Warning');
            }
            return {
                ...state,
                cart:newCart
            }
                       
        default:
            return state
    }
};

export default reducer;
