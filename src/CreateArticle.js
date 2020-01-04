import React from 'react';

import {getToken} from './LoginForm';

class CreateArticle extends React.Component  {
 // class ProductForm extends React.Component 
//let t1 =''
 constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.handleSave = this.handleSave.bind(this);
  
  this.state = {
    //product: Object.assign({}, RESET_VALUES),

    myArticles: {
      articleTitle: '',
      details: ''
 }
}
 }
  //console.log('can we get our token')

  handleChange(e) {
    const target = e.target;
    const value =  target.value;
    const name = target.name;

    console.log(name)
    console.log(value)

    this.setState((prevState) => {
      prevState.myArticles[name] = value;
      const v1=prevState.myArticles
      console.log(v1)
     // console.log(this.state.credential.email)
      //this.state.email=v1;
      //this.state.password=v1
      return  {myArticles:v1}
    });
    console.log('ooh ohhh glory to your name i shout it loud.........')
    //console.log(this.state.credential)

  }
  

  handleSave(e) {
    e.preventDefault()
    const t1= getToken()
  console.log(t1);
    console.log(this.state.myArticles.details)
    fetch('http://localhost:3001/api/article/articles', {method :'POST',
        headers: { "Content-Type":  "application/json",
                   "authorization":t1},
           body:JSON.stringify({
            
		
	
              "articleDetails": this.state.myArticles.details,
              "title":this.state.myArticles.articleTitle
           }),
        })
        .then(response=>{
          if(response.status===201){
            console.log('back to homepage')
            this.props.history.push('./HomePage')
          }
        })
        .then((res)=>console.log(res))
     
  }
  render(){

    return (
      <div>
        <h2>welcome to my CreateArticle</h2>
        <p>
          <label>
            Title of Article
            <br />
            <input type="text" name="articleTitle" onChange={this.handleChange} value={this.state.myArticles.articleTitle} />
          </label>
        </p>
        <p>
          <label>
            Article
            <br />
            <textarea onChange={this.handleChange} name='details' value={this.state.myArticles.details}> </textarea>
          </label>
        </p>

        <input type="submit" value="Save" onClick={this.handleSave} />
        </div>
    );
  }
  }
  
  export default CreateArticle;