import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from "./containers/Header";
import ProductList from './containers/Productlist';
import ProductComponet from './containers/ProductComponet';
import ProductDetails from './containers/ProductDetails';

const App = ()=>{
  return(<>
   <Header/>
   <Router>
   <Switch>
     <Route path="/" exact component={ProductList} />
     <Route path="/product/:productId" exact component={ProductDetails} />
     <Route>404 error</Route>
     </Switch>
   </Router>
  </>)
};
export default App;