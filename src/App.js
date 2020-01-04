import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import CreateGifs from './CreateGifs';
import MainPage from './MainPage'
import CreateArticle from './CreateArticle'
import { BrowserRouter ,Route,Redirect,Switch,withRouter} from 'react-router-dom'
import HomePage from './HomePage'
import HomePage2 from './HomePage2'
import CreateUser from './CreateUser';
import Comments from './Comments';
import Comments2 from './Comments2';
import view from './view';
import myModal from './MyModal'
import SingleView from './SingleView'


  class App extends React.Component{

    constructor(props) {
      super(props);
      this.handlm = this.handlm.bind(this);
      //this.handleSave6 = this.handleSave6.bind(this);
      this.state= {
         data:[],
         ids:0
  
      }
    }

handlm(m){
  console.log('sofos is making so much noise')
  console.log(m)
   this.setState({
     ids:m
   }) 

}

shouldComponentUpdate(nextProps, nextState) {
  console.log('should my component update')
  console.log(this.props)
  if (this.props.number === nextProps.number) {
    return false;
  } else {
    return true;
  }
}

  //console.log('epaaaaaaaaaaaaaaaaaaaaaa')
  render(){
    console.log('i was rerendered when windows.open was called')
    console.log(this.state.ids)
  return (
    //
    
    <div>
        <header className="App-header"><h1>Social Network App</h1></header>
        <BrowserRouter>
        <Switch>
        
          <Route  exact path ="/" component={LoginForm}></Route>
          
          <Route  path='/HomePage' render={(props)=><HomePage {...props} ids={this.handlm}/>}></Route>
          <Route  path='/HomePage2' render={(props)=><HomePage2 {...props} ids={this.handlm}/>}></Route>
          <Route  path='/CreateArticle' component={CreateArticle}></Route>
          <Route  path='/CreateGifs' component={CreateGifs}></Route>
          <Route  path='/CreateUser' component={CreateUser}></Route>
          <Route  path='/Comments2' render={(props)=><Comments2 {...props} />}></Route>
          <Route  path='/myModal' component={myModal} ></Route>
          <Route  path='/SingleView' component={SingleView} ></Route>
          
          
          <Route  path='/view' component={view}></Route>
  <Route  path='/Comments' render={(props)=><Comments {...props} ids2={this.state.ids}/>}></Route>


          
          
          

          </Switch>
          </BrowserRouter>
      </div>
      
  );

  }
}

export default App;
