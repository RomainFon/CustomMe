import React from 'react';
import {Switch,Route} from "react-router-dom";
import Custom from "./views/custom";
import Preview from "./views/preview";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/custom" component={Custom}/>
            <Route exact path="/" component={Preview}/>
        </Switch>
    </div>
  );
}

export default App;
