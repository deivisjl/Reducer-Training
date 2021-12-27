import types from "../types";

const initialProductState ={
    products:[
        {id:1, title:"Producto 1"},
        {id:2, title:"Producto 2"},
    ],
    cart:[
        {id: 1, title:"Producto 1", quantity: 1},
    ],
    activeProduct: {id:1, title:"Producto 1"}
}

const productReducer = (state,action) =>{
    switch(action.type)
    {   case types.productShow:
            return {
                ...state,
                activeProduct:action.payload
            }
        case types.productAddToCart:
        {
            const newProduct = action.payload
            const cartContainProduct = state.cart.find(
                product => product.id === newProduct.id
            )

            return cartContainProduct
            ?{
                ...state,
                cart: state.cart.map(p => 
                    p.id === newProduct.id
                    ? {...p,quantity:p.quantity + 1}
                    : p
                    )
            }
            :{
                ...state,
                cart:[
                    ...state.cart,
                    {...action.payload, quantity:1}
                ]
            }
        }
        case types.productRemoveFromCart:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }
        case types.productRemoveOneFromCart:
        {
            const productDelete = state.cart.find(product => product.id === action.payload)
            return productDelete.quantity > 1
            ?{
                ...state,
                cart: state.cart.map(p => 
                        p.id === action.payload
                        ? {...p, quantity: p.quantity - 1}
                        : p
                    )
            }
            : {
                ...state,
                cart: state.cart.filter(p => p.id !== action.payload)
            }
        }
        default:
            return state;
    }
}

export { initialProductState }
export default productReducer;