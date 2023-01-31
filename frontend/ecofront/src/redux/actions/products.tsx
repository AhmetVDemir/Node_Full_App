

export const productAction = () => async (dispatch: any) => {
    const data = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
        
        dispatch({type:"GET_PRODUCTS",payload:data});
}