import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import './css/style.css';
import axios from 'axios';
import RecipeReviewCard from './Card';
import Services from './Services';
import { Paper } from '@material-ui/core';
const url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzHSLh3BmjjU8TMqsTrlSOiESmMCi7p283w&usqp=CAU";

//get data from localStorage

const App=()=>{
   const[search,setsearch]=useState();
   const[item,setitem]=useState();
   const[arr,setarr]=useState([]);
   const searchtime =()=>{
     setitem(search);
     console.log(arr);
   }
   
   useEffect(()=>{
     const getdata=async()=>{
       const resp = await axios.get(`https://api.edamam.com/search?q=${item}&app_id=6285f990&app_key=9c46c80cc55cef69db9476a4619e7464`);
       const response = await resp;
       setarr(response.data.hits);
     }

     getdata();
   })
    return(<>
    <header>
   <h4 className="logo">mycook.com</h4>
    <div  className="searchbar">
      <input type="text" name="search"
      onChange={(e)=>setsearch(e.target.value)} value={search}
       placeholder="Enter your dish" /><button onClick={searchtime}>search</button></div>
     
    </header>
    <div className="card">
   {
     arr.map((val)=>{
       return<>
         <RecipeReviewCard
         firstletter={val.recipe.label.charAt(0)}
           titles={val.recipe.label}
           types={val.recipe.cuisineType}
           imgsrc={val.recipe.image}
           paragraphs={val.recipe.ingredientLines}
         />
       </>
     })
   }
</div>
<Services />
<di className="footer">
<div className="icons">
<a href="https://www.linkedin.com/in/pramod-mahajan-a717771b1"> <LinkedInIcon className="linked"/></a><a href=""><GitHubIcon/></a>
</div>
</di>
      </>)
}
export default App;

