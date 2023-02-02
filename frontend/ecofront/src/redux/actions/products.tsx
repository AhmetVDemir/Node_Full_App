import { Dispatch } from "react";
import { AnyAction } from "redux";
import store from "../store";


export const productAction :Dispatch<AnyAction> = () => async () => {
    const data = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
        
    console.log("Products tan : \n----------------------------------------------------------\n" + data + "\n---------------------------------------------------------\n");
        
        store.dispatch({type:"GET_PRODUCTS",payload:data});
}