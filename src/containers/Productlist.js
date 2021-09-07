import React, { useEffect } from "react";
import 'semantic-ui-css/semantic.min.css';
import "../css/index.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setproducts,fetchproducts } from "../redux/actions/ProductAction";
import ProductComponet from "./ProductComponet";



const ProductList = ()=>{
  const products = useSelector((state)=> state);
  const dispatch = useDispatch();
 // const fetchproduct =async()=>{
 //   const result = await axios.get("https://fakestoreapi.com/products")
 //   .catch((err)=>{console.log(err)});
 //   dispatch(setproducts(result.data));
 // };
  useEffect(()=>{
    dispatch(fetchproducts());
  },[]);
  
   return(<><div class="ui segment">
    <div class="ui ui three stackable cards">
    <ProductComponet />
    </div>
    </div>
  
  
   </>)
 }
export default ProductList;