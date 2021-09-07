import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchproduct,fetchproducts,removeselectedproduct } from "../redux/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";



const ProductDetails =()=>{
    const product =  useSelector((state)=>state.product);
    const {title,image,price,description,category} = product;
    const {productId} =useParams();
    
    const dispatch = useDispatch();
    //const fetchProductDetail =async()=>{
    //    const result = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
    //        console.log("myerror",err);
    //    });
    //    dispatch(selectedproduct(result.data));
    //};
   useEffect(()=>{
     if(productId && productId !== "") dispatch(fetchproduct(productId));
     return()=>{
       dispatch(removeselectedproduct());
     };
   },[productId])
   console.log(productId);

    return(
      <div class="ui segment">
      <div className="ui grid container">
          {Object.keys(product).length === 0 ?(
            <div class="ui segment">
               <div class="ui active inverted dimmer">
                 <div class="ui medium text loader">Loading</div>
               </div>
            </div>
          ):(
            
            <div class="ui items">
            <div class="item">
                 <div class="image">
                    <img src={image} alt={image}/>
                  </div>
                <div class="content">
                <a class="header">{title}</a>
                <div class="meta">
                    <span>{category}</span>
                    <h1>${price}</h1>
                </div>
               <div class="description">
                <p>{description}</p>
               </div>
              <div class="extra">
              <button class="ui primary button">Addcard</button>
               </div>
               <div class="ui vertical animated button" tabindex="0">
                 <div class="hidden content">Shop</div>
                  <div class="visible content">
                       <i class="shop icon"></i>
                  </div>
                  </div>
            </div>
        </div>
        </div>
      )}  
          </div></div> );

};
export default ProductDetails;;