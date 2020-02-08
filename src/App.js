import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Page from "./components/Page";
import Main from "./components/Main";
import {useGetPermission} from "./hooks/usePermission";
import PrivateRoute from "./components/PrivateRoute";

function App() {

    const [permission, handler] = useGetPermission();
    const [response, setResponse] = useState(null);



    const syncHandler = (params) => {
        setResponse((params.page %  2 === 0));
    };
    const condition = {
        handler: syncHandler,
        response: response
    }

    const asyncCondition = {
        handler: handler,
        response: permission
    };


  return (<div>
      <Switch>
          <Route exact path="/" children={<Main/>} />
          <Route exact path="/page/:page" children={<Page/>}/>
          <PrivateRoute exact path ="/privatepage/:page" children={<Page/>} condition={condition}/>
          <PrivateRoute exact path ="/asyncpage/:page" children={<Page/>} condition={asyncCondition}/>
      </Switch>
  </div>);


}

export default App;
