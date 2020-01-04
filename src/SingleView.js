import React from 'react';

import {GetId} from './HomePage2';
import {getEmpId} from './LoginForm';

let t1=''
let check =0
let t2=''


export default class SingleView extends React.Component {

    constructor(props) {
        super(props);
        this.view1= this.view1.bind(this);
        this.view2= this.view2.bind(this);
        this.state={
           url:'',
           data:[],
           comment:'',
           article:''

        }

    }

    componentDidMount() {
        
        const b2=GetId()
        console.log(b2)
        if(b2.typofClick=='g'){
        //const { onLoad } = this.props;
        console.log('did u enter componentdid mount')
        
        console.log(b2)
        console.log('did u enter componentdid mount')
       // console.log(typeof(b2.id))
        fetch('http://localhost:3001/api/gifs/'+b2.mid)
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
              url:res.data.url,
              data:res.data
            })
            
      
          })

        }else{
            console.log(b2.mid)
            fetch('http://localhost:3001/api/article/articles/'+b2.mid)
            .then(response=>(response.json()))
            .then((res)=>{
                check=1

                this.setState({
                    article:res.data.articleDetails,
                    data:res.data
                  })

            })

        }
    }

    view1=()=>{
         console.log(this.state.url)
        return(<img src={this.state.url}></img>)
    }

    view2=()=>{
        console.log('i was in view22222222')
        console.log(this.state.data.articleDetails)

    return(<div name='osas'>{this.state.data.articleDetails}</div>)
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
           <div className='bb'>
             
         <textarea className='mg'  readOnly>
            {article2.comment}
            
  
  
          </textarea>
         <p>posted by {article2.authorName}</p>
          <button disabled={dis}  name={article2.commentId} onClick={this.DeleteComment}>delete</button><br></br><br></br>
          </div>  
         )
          })}</p>
        )
       }

    render(){
        const b3=GetId()
        console.log(b3.typofClick)
        if(b3.typofClick=='g'){
           t2=this.view1()
        }else{t2=this.view2()
        console.log(t2)}
        if(check==1){
            console.log(this.state.data)
            t1=this.pt()
            check=0
           console.log('i was undefined ooooooooo')
           console.log(t2)
          }else{}
        return(
<div>
    
<h1>i am in single SingleView</h1>
{console.log(t2)}
{t2}
<h2>Comments</h2>
{console.log(t1)}

{t1}
<div></div>




</div>

)

}

}