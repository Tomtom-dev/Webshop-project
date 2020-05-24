const initialState = [];
  
  //ADD_ARTICLE REMOVE_ARTICLE
  
  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TO_CART": 
        return [...state, action.payload]

      case "ADD_CART2":
          const product = action.payload
          const exist = state.find( p => p.id === product.id)

          if(!exist){
            return[...state, { ...product, quantity : 1}]
          }else {
              const updatedCart = state.map ( (p) => 
              p.id === product.id ? {...p, quantity : p.quantity + 1} : p )
              return updatedCart
          }




      default: {
        return state;
      }
    }
  }
  