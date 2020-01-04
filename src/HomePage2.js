import React from 'react';
import { BrowserRouter ,Route,Redirect,Switch} from 'react-router-dom'
import Popup from "reactjs-popup"
import Content from "./Content.js";
import PopupExample from "./PopupExample.js";
import Modal from 'react-modal';
import MyModal from "./MyModal.js";

let myd=0
let myd2=0
let midObj={mid:'',
         typofClick:''}


let myd2b={id:0,
            typ:'g'}

export default class HomePage2 extends React.Component {
 
  constructor(props) {
    super(props);
    this.handleSave6 = this.handleSave6.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.imageView = this.imageView.bind(this);
    
    
    this.state= {
       ids:0,
       data:[],
       showPopup:false

    }
  }
componentDidMount() {
    const { onLoad } = this.props;

    fetch('http://localhost:3001/api/feed')
    .then(response=>(response.json()))
    .then((res)=>{
      (console.log(res.data[0]))
      res.data.forEach(element => {
        console.log(element.id)
      });
      this.setState({
        data:res.data
      })

    })
           
  }

  handleSave6=(e)=> {
    console.log('valenciaaaaaaaaaaaaaaaaa')
    console.log(e)
    const target = e.target;
    console.log(e.target.name)

    
    /*this.setState({
      ids:e.target.name
    })*/
    //myd=myd2
    //myd2b.id=myd2
    //console.log(myd)
    //alert(target.name)

    //this.togglePopup()
    //this.props.ids(e.target.name)
    //window.open('/Comments2', this.target,    'width=300,height=300,resizable,scrollbars=yes')
    //this.props.history.push('./Comments2','width=300,height=300,resizable,scrollbars=yes')
    //window.location.replace('/Comments2', this.target,    'width=300,height=300,resizable,scrollbars=yes')
    //window.open('www.google.com', this.target,    'width=300,height=300,resizable,scrollbars=yes')

  }

  handleSave=(e)=> {
    //e.preventDefault()
    alert('57457484848')
    console.log(e)
    const target = e.target;
    const value =  target.value;
        const name = target.name;

        if(name==='article'){
    this.props.history.push('./CreateArticle')
  }else
  {
    this.props.history.push('./CreateGifs')
  }


  }

  imageView(e){
   midObj.mid=e.target.name
   let aaa=e.target.name2
   console.log(e.target)
   console.log('testing testing')
   console.log(e.target.name)
   console.log(e.target.dataset.name2)
   console.log(e.target.src)
   console.log(e.target.name7)
   if(e.target.dataset.name2=='img'){
       midObj.typofClick='g'
       this.props.history.push('./SingleView')

   }else{midObj.typofClick='a'}

   console.log(midObj)
    this.props.history.push('./SingleView')

  }

  togglePopup() { 
    console.log('i was in toggle popup') 
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  

     



  render(){
    //const { data } = this.props;
    console.log(this.props)
    //console.log(this.state.showPopup)
    
    return (
      <div>
        <h2 id ='wc'>welcome to my social network</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
     <button name='article' onClick={this.handleSave}> Create new article </button> &nbsp;&nbsp;&nbsp;&nbsp;
   
     <button name ='gif' onClick={this.handleSave}> Upload a picture</button>
        

    <p>{this.state.data.map((article) => {
      console.log(this.state.data)
      var ct=article.url
      let dis='block'
      let dis2='none'
      let nm='article'
      {myd2=article.id}
      
              
      console.log(article.url.slice(0,4))
      console.log(typeof(this.state.data))
        if(article.url.slice(0,4)=='http'){
            ct=''
            dis='none'
            nm='picture'
            dis2='inline'
            myd2b.typ='g'
        }
        //ct=''
              return ( 
                <div>
                  <p className='title'>{article.title} </p>
              <textarea name={article.id} onClick={this.imageView} data-name2='ta' readOnly style={{display:dis}}>{ct}</textarea><br></br>
              <img data-name2='img' name={article.id} onClick={this.imageView} src={article.url} name7='7777'  style={{display:dis2}}> 
              
          
              </img><br></br>

    <p className='bold'>posted by {article.authorName}</p>
              
              <button name={article.id} onClick={this.handleSave6}>Comments2</button>
              
              <Popup name={article.id}  modal trigger={<button onClick={this.handleSave6}>Click Me</button>}>
        {close => <Content name={article.id} close={close} />}
      </Popup>
      <PopupExample name={article.id}></PopupExample> 
      <MyModal  name={article.id}/>
          
   
  
        
              </div>
              

              )
              
            })} </p>


            
        </div>
    );
  }
}
  
export function GetId() {
  console.log('poliseeeeeeeeeeeeeeee')
  console.log(myd2b)
  
  return midObj


}