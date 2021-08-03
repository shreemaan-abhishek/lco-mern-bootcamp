import React from "react"
import Home from "./core/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom";
const Routes = () => {
    return ( 
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        </BrowserRouter>
     );
}
 
export default Routes;