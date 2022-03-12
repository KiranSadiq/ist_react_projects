import React from "react";
import {sum ,sub, mult, div} from "./calc";
function App(){
    return(
    <React.Fragment>
<ul>
   <li>sum of two numbers is{sum(40,3)}</li>
   <li>sub of two numbers is{sub(40,3)}</li>
   <li>mult of two numbers is{mult(40,3)}</li>
   <li>div of two numbers is{div(40,3)}</li>
</ul>
</React.Fragment>
    ); 
}
export default App;