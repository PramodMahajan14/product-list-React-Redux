import React from "react";

import { useSelector } from "react-redux"; 
import { Link } from "react-router-dom";


const ProductComponet =()=>{
    const products = useSelector((state)=> state.allproducts.products);

    const Renderlist = products.map((product)=>{
        const {id,title,price,image,category} = product;
        return(
         
         
          
          <div className="ui raised link card">
          <Link to={`/product/${id}`} >
         <div className="image">
          <img src={image} alt="pic" style={{width:"25rem"}}/>
         </div>
      
       <div className="content" key={id}>
         <div className="ui center header">
           <h2>{title}</h2>
           <b>${price}</b> 
           <h4>{category}</h4>
         </div>
       </div>
       </Link>
     </div>
       
     
         )}
        );
   
    return(<>
    
      {Renderlist}
    
    </>);

};
export default ProductComponet;


/*<div className="four wide column">
             <Link to={`/product/${id}`} >
                <div className="ui link cards">
                  <div className="card" key={id}>
                      <div className="image">
                      <img src={image} alt={title} />
                       </div>
                      <div className="content">
                          <div className="header">{title}</div>
                          <div className="meta price">₹{price}</div>
                          <div className="meta">{category}</div>
                      </div>
                  </div>
                </div>
               </Link>
          </div>*/
         
          /*<div className="ui raised link card">
       <Link to={`/product/${id}`} >
      <div className="image">
       <img src={image} alt="pic" style={{width:""}}/>
      </div>
   
    <div className="content" key={id}>
      <div className="ui center header">
        <h2>{title}</h2>
        <b>${price}</b> 
        <h4>{category}</h4>
      </div>
    </div>
    </Link>
  </div>*/