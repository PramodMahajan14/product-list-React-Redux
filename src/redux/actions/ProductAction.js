import fakestoreapi from "../../apis/fakeStoreApi";
import  {ActionTypes} from '../contants/Action-types';

export const fetchproducts =()=>
    async(dispatch)=>{
        const result = await fakestoreapi.get("/products");
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:result.data});
    };


export const fetchproduct =(id)=>
    async(dispatch)=>{
        const result = await fakestoreapi.get(`/products/${id}`);
        dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:result.data});
    };

export const setproducts =(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};

export const selectedproduct =(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};

export const removeselectedproduct =()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
       
    };
};