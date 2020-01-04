import React from 'react';

let token=''
let status =0
let dataf2=1

export default class CreateUser extends React.Component {

    

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.handleSave = this.handleSave.bind(this);
        
        this.state = {
          //product: Object.assign({}, RESET_VALUES),

          credential: {
            email: '',
            password: '',
            firstName:'',
            lastName:'',
            gender:'',
            department:'',
            userRole:'',
            jobRole:'',
            department:''

          },
          notfound:'',
          dataf:1

          //email:'',
          //password:'',
         // errors: {}
          //valid_state:true
        };
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
        fetch('http://localhost:3001/api/auth/signup', {method :'POST',
        headers: { "Content-Type":  "application/json"},
           body:JSON.stringify({
            
		
	
              "Email": this.state.credential.email,
              "Password":this.state.credential.password,
              "Gender":this.state.credential.gender,
              "FirstName":this.state.credential.firstName,
              "LastName":this.state.credential.lastName,
              "JobRole":this.state.credential.jobRole,
              "UserRole":this.state.credential.userRole,
              "Department":this.state.credential.department
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
          console.log(token)
          //dataf=10
          //console.log(dataf)
          if(status===201){
            dataf2=10
            console.log('i am in history')
            
            this.props.history.push('./HomePage')

            console.log('i got here ooooo')

            //this.render()
            }
        })

    }


    render() {

    return (

           <form>

            <h3>Create new user</h3>

            <p>
              <label>
                First Name
                <br />
                <input type="text" name="firstName"  onChange={this.handleChange} value={this.state.firstName} />
              </label>
            </p>

            <p>
              <label>
                last Name
                <br />
                <input type="text" name="lastName"  onChange={this.handleChange} value={this.state.lastName} />
              </label>
            </p>
            <p>
              <label>
                Email
                <br />
                <input type="text" name="email"  onChange={this.handleChange} value={this.state.email} />
              </label>
            </p>

            <p>
              <label>
                Password
                <br />
                <input type="text" name="password"  onChange={this.handleChange} value={this.state.password} />
              </label>
            </p>
            <p>
              <label>
                Gender
                <br />
                <input type="text" name="gender"  onChange={this.handleChange} value={this.state.gender} />
              </label>
            </p>
            <p>
              <label>
                jobRole
                <br />
                <input type="text" name="jobRole"  onChange={this.handleChange} value={this.state.jobRole} />
              </label>
            </p>
            <p>
              <label>
                userRole
                <br />
                <input type="text" name="userRole"  onChange={this.handleChange} value={this.state.userRole} />
              </label>
            </p>
            <p>
              <label>
                department
                <br />
                <input type="text" name="department"  onChange={this.handleChange} value={this.state.department} />
              </label>
            </p>
            <input type="submit" value="Save" onClick={this.handleSave}/>
            </form>

    )




    }




}