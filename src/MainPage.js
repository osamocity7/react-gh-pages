import React from 'react';
import { BrowserRouter ,Route,Redirect,Switch} from 'react-router-dom'
import HomePage from './HomePage'
import CreateArticle from './CreateArticle'
const MainPage=()=> {
    
    return (
        <div>
          <BrowserRouter>
          <Switch>
          <Route  path='/' component={HomePage}></Route>
          <Route  path='/CreateArticle' component={CreateArticle}></Route>
          </Switch>
          </BrowserRouter>
        </div>

)

    }
  
  export default MainPage;
  