import { Dispatch } from "react";
import store from "../store";


export const productAction = async ():Dispatch<any> => {
    const data = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
        
    console.log("Products tan : \n----------------------------------------------------------\n" + data + "\n---------------------------------------------------------\n");
        
       let x :any = await store.dispatch({type:"GET_PRODUCTS",payload:data});
        return x;
    }