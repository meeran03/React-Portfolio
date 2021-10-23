import React from 'react';
import Main from './Components/Main'
import Form from './Components/Form'
import {BrowserRouter,Switch,Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
           <Main/>
        </Route>   
        <Route exact path="/create">
           <Form/>
        </Route>  
      </Switch>
      </BrowserRouter>
      </>
    )
  }
}
export default App;
