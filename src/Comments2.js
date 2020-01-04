import React from 'react';
import {GetId} from './HomePage';
import {getToken} from './LoginForm';
import {getEmpId} from './LoginForm';

let t1=''
let check =0

export default class Comments2 extends React.Component {

 

    constructor(props) {
        super(props);
        this.pt = this.pt.bind(this);
        this.saveComment = this.saveComment.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.closeMe = this.closeMe.bind(this);
        this.DeleteComment = this.DeleteComment.bind(this);

        

        

       // const b2=GetId()
       // console.log('we are in constructor')
       // console.log(b2)
        
        this.state = {
            data:[],
            comment:'',
            rendCom:0
        }


    }
    //componentDidMount
    componentDidMount() {
        const { onLoad } = this.props;
        console.log('did u enter componentdid mount')
        const b2=GetId()
        console.log('did u enter componentdid mount')
        console.log(typeof(b2.id))
        fetch('http://localhost:3001/api/gifs/'+this.props.name)
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

    closeMe(){
      console.log(this.props.close())

      this.props.close()
    }

    DeleteComment=(e)=>{
      console.log('i was delete')
      console.log(e)
      console.log(e.target)
      console.log(e.target.name)

      console.log('i returned ooooooo')
      
      return
      
       const target2=e.target
       const name5 =target2.name
       console.log(target2.name)

       const t1= getToken()

       fetch('http://localhost:3001/api/gifs/com/'+name5, {method :'delete',
        headers: { "Content-Type":  "application/json","authorization":t1},
          
        }).then ((res)=>console.log(res))

        this.closeMe()

        this.setState({
          rendCom:1
        })
    }

     pt=()=>{
      return(
      <p>{this.state.data.comments.map((article2) => { 
        const eid =getEmpId()
        let dis =true
        console.log(dis)
        if(article2.authorId==eid){
           console.log(article2.authorId)
           console.log(eid)
           dis =false
        }else{dis=true}
       return(
         <div>
           
       <textarea>
          {article2.comment}
          


        </textarea> <br></br>
        <button disabled={dis}  name={article2.commentId} onClick={this.DeleteComment}>delete</button>
        </div>  
       )
        })}</p>
      )
     }

     async saveComment(e){
      console.log(e)
       console.log(e.target)
       
       let id=this.props.name
       console.log(id)
      await fetch('http://localhost:3001/api/gifs/'+id+'/comment', {method :'POST',
      headers: { "Content-Type":  "application/json"},
         body:JSON.stringify({
          
  

            "gifComment": this.state.comment,
            
         }),
      })
      //console.log(this.props.history)

      this.closeMe()
      //cy()
     }

     handleChange(e) {
      const target = e.target;
      const value =  target.value;
      const name = target.name;
      console.log(e.target)
      console.log(name)
  
      this.setState((prevState) => {
        prevState.comment = value;
        const v1=prevState.comment
        console.log(v1)
        //console.log(this.state.credential.email)
        //this.state.email=v1;
        //this.state.password=v1
        return  {comment:v1}
      });
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
       <h3>mak your comment</h3>
        <textarea name='textA' onChange={this.handleChange}>
           
        </textarea> <br></br>  
        <button onClick={this.saveComment}>save</button>
    </div>

       )


    }








}