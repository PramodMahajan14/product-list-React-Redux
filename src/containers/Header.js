import React from 'react';
//import "../css/index.css";

const Header = ()=>{
    return(<>
    <div class="ui secondary pointing menu">
  <a class="active item">
    Home
  </a>
  <a class="item">
    product
  </a>
  <a class="item">
    Friends
  </a>
  <div class="right menu">
    <a class="ui item">
      Logout
    </a>
  </div>
</div>
<div class="ui segment">
  <p></p>
</div>
    </>);
};
export default Header;