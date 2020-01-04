import React from 'react';

import CreateArticle from './CreateArticle'

import { BrowserRouter ,Route,Redirect,Switch,useHistory} from 'react-router-dom'

import {
  withRouter
} from 'react-router-dom'

let dataf2=1
let status =0
let token=''
let empId=0

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        
        this.state = {
          //product: Object.assign({}, RESET_VALUES),

          credential: {
            email: '',
            password: ''
          },
          notfound:'',
          dataf:1

          //email:'',
          //password:'',
         // errors: {}
          //valid_state:true
        };
      }

      data={

      }

      componentDidMount(){
       



      }

       handleSave=(e)=> {
        e.preventDefault()
        //const { history } = this.props;
        //let history= useHistory()
        console.log('biodu n abiodu which time')
        console.log(this.state.credential)
        
        console.log(this.state.credential.email)
        let disp1=this.state.credential.email
        
        console.log('i am in handle save')
   console.log(disp1)
   console.log(this.state.credential.password)
        fetch('http://localhost:3001/api/auth/login', {method :'POST',
        headers: { "Content-Type":  "application/json"},
           body:JSON.stringify({
            
		
	
              "Email": this.state.credential.email,
              "Password":this.state.credential.password
           }),
        })
       .then(response=>(response.json()))
          /*console.log(response.status) 
          status=response.status
          let token =response.data
          console.log(response) */
          
      
       .then(resp=>{
         console.log(resp)
        
        console.log(resp)
        console.log('dtdttttttttttttttt')
          status=resp.data.istatus
          token =resp.data.token
          empId=resp.empId
          console.log(token)
          //dataf=10
          //console.log(dataf)
          if(status===201){
            dataf2=10
            console.log('i am in history')
            
            this.props.history.push('./HomePage2')

            console.log('i got here ooooo')

            //this.render()
            }



          if(status!==201){
            const c2='invalid username or password'
            console.log('invalid username or password')
            this.setState({
              notfound:c2
            })
  
           console.log('he did not return')
            return
          }

            //dataf=10
         
       })
       console.log('t dtydydddxvxnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
       
       //e.preventDefault();

      }

      handleChange(e) {
        const target = e.target;
        const value =  target.value;
        const name = target.name;

        console.log(name)
    
        this.setState((prevState) => {
          prevState.credential[name] = value;
          const v1=prevState.credential
          console.log(v1)
          console.log(this.state.credential.email)
          //this.state.email=v1;
          //this.state.password=v1
          return  {credential:v1}
        });
        console.log('ooh ohhh glory to your name i shout it loud.........')
        console.log(this.state.credential)

      }

      render() {
        if(dataf2===10){
          console.log('i am in redirectttttttt')
          console.log('its true i mean it')
         //return <Redirect to="/CreateArticle"/>
         //this.props.history.push('/HomePage')
        }
    
        return (
             <div className='panel'>
            <form className='form'>
            <h3>Log in to your account</h3>
            <p>
              <label >
                
                <br />
                <input placeholder='Email address' className='form-control' type="text" name="email"  onChange={this.handleChange} value={this.state.email} />
              </label>
            </p>
            <p>
              <label>
                
                <br />
              <input placeholder='Password' className='form-control' type="text" name="password"  onChange={this.handleChange}  value={this.state.password}/>
              </label>
            </p>

            <br></br>
            
            <input class="btn btn-primary btn-lg btn-block"  type="submit" value="Log In" onClick={this.handleSave}/>
        <div><h2 id='f2'>{this.state.notfound}</h2></div>
          </form>

          <a class="panel-footer" href="/signup/login">New Member ? &nbsp;<span>Sign Up</span></a>

          </div>
        );
      }


}

export  function getToken()  {
    
  return token

}

export  function getEmpId()  {
    
  return empId

}

