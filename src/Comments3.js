import React from 'react';
import {GetId} from './HomePage';

import {getToken} from './LoginForm';

let t1=''
let check =0

export default class Comments2 extends React.Component {

 

    constructor(props) {
        super(props);
        this.pt = this.pt.bind(this);
        //this.handleSave = this.handleSave.bind(this);

       // const b2=GetId()
       // console.log('we are in constructor')
       // console.log(b2)
        
        this.state = {
            data:[]
        }


    }
    //componentDidMount
    componentDidMount() {
        const { onLoad } = this.props;
        console.log('did u enter componentdid mount')
        const b2=GetId()
        console.log('did u enter componentdid mount')
        console.log(typeof(b2.id))
        fetch('http://localhost:3001/api/gifs/'+b2.id)
        .then(response=>(response.json()))
        .then((res)=>{
          check=1
           // (console.log(res.data))
            console.log(typeof(res.data.comments))
            res.data.comments.forEach(element => {
              console.log(element.comment)
              //console.log(element.comments)
            });
            console.log(res.data)
            console.log('moooo salah')
            this.setState({
              data:res.data
            })
      
          })
    }

     pt=()=>{
      return(
      <p>{this.state.data.comments.map((article2) => { 
       return(
         <div>
       <textarea>
          {article2.comment}


        </textarea> 
        </div>  
       )
        })}</p>
      )
     }


    render(){
    //console.log(this.props.ids2)
    console.log(this.props)
    //const b2=GetId()
    //console.log(b2)
    

    if(check==1){
      console.log(this.state.data)
      t1=this.pt()
      check=0
     console.log('i was undefined ooooooooo')
    }else{}
    console.log('we are in constructor')
    console.log('we are in constructor')
 // console.log(this.state.data)
 console.log(this.state.data.comments)
     
    return (
        
        

      <div>
       
       {t1}
        <textarea>
           4414145 
        </textarea>
    </div>

       )


    }








}