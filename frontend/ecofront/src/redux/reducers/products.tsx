

export const productsReducer = (state = {products : []},action:any) => {

    switch(action.type){

        case "GET_PRODUCTS":
            return {
                products:action.payload
            }

        default: return state;
    }
};