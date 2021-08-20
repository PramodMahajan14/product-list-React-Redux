import React from 'react';
import  './css/style.css';
const Services =()=>{
    return(<>
        <div className="services">
            <div className="services_gallery">
            <h3>Gallery</h3><br/>
             <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic" className="gallery-pic" />
             <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic" className="gallery-pic" />
             <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic" className="gallery-pic" />
             <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic" className="gallery-pic" />
             <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic" className="gallery-pic" />
             <img src="https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJhY2tncm91bmQlMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="pic" className="gallery-pic" />
            </div>
            <div className="services_para">
            <h1 style={{textAlign:'center'}}>Services</h1>
               <div className="services_box" id="box1">
                <h2 style={{color:'white',borderBottom:' 5px solid green',textShadow:'0px 0px 5px  black'}}>Nutrition Wizard</h2>
                 <ul>
                     <li>Real time processing</li>
                     <li>Natural language understanding</li>
                     <li>Results for calories</li>
                     <li>Results for 25 nutrients</li>
                     <li>Appropriateness for major diets</li>
                     <li>Personalization of daily value percentages</li>
                     <li>Save analyzed recipes and ingredient lists</li>
                     <li>Record recipes as eaten</li>
                 </ul>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRU9hUbWA2Fz0ED3ALRLFD3SXdyD_Ny-pseg&usqp=CAU"alt="pic" />
               </div>
               <div className="services_box" id="box2">
                <h1><span className="lunch">Lunch</span>/<span className="dinner">Dinner</span>/<span className="breakfast">breakfast</span></h1>
                    <div className="lunch-t">
                        <p>
                        asian-Vegetable Tofu Fried Noodles,
                        mediterranean-Standing Rib Roast with Aioli,
                        eastern europe-Vodka-Marinated Rib Roast
                        american-Dinner Tonight: Chipped Beef Gravy,<br/>
                        american-An Ideal Lunch Salad recipes-salad,<br/>
                        japanese-Bacon-Jalapeño Balls With Everything Carrots,
                        nordic-Balsamic Salmon with Quinoa Tabouli,
                        american-White Chicken Chil,american-drinks-Gluten-Free Strawberry Lemonade Cupcakes,
                        american-Grilled Tequila Lime Chicken Salad Quesadi-salad,sandwiches,
                        american-bread-White bread rolls (pav),
                        indian-Sambhar (Indian Lentil Stew),
                        indian-Indian Rice Mess,indian-Tomato Uthappam - Indian Style Omelette,
                        indian-Indian chicken protein pots,
                        french-Petit Salé Aux Pommes De Terre (Salted Pork ),
                        italian-Parmesan Herb Lamb Chops,
                        american-Applewood Smoked Bacon Rind Barded Pork Loi... ,
                        american-Perfect Prime Rib,mediterranean-Standing Pork Rib Roast recipes,
                        middle eastern-Roasted Rack of Lamb
                        </p>
                        
                    </div>
               </div>
               <div className="services_box" id="box3">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ylfqg3Xl_NZr9m9EZDVSnLPcKXw5DGtDHQ&usqp=CAU" alt="pic" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8sfhpYgnfg9K48EfCkCmOFG8__J6FcXGeg&usqp=CAU" alt="pic" className="picser" />
               
                      <h3>Make a batch</h3>
                      <h3><b>cook now ,eat later</b></h3>
                      <h6>Try batch cooking one of our easy recipes 
                      and freezing portions for a future speedy midweek meal.</h6>
               </div>

            </div>
        </div>
    </>)
}
export default Services;