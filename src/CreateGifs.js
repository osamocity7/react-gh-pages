import React from 'react';


class CreateGifs extends React.Component  {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state =  {
            selectedFile: null,
            imagePreviewUrl: null,
            title:'',
            image:null
          };
       }

    

      handleChange(e) {
        const target = e.target;
        const value =  target.value;
        const name = target.name;
    
        console.log(name)
        console.log(value)
    
        this.setState((prevState) => {
          prevState.title = value;
          const v1=prevState.title
          console.log(v1)
         // console.log(this.state.credential.email)
          //this.state.email=v1;
          //this.state.password=v1
          return  {title:v1}
        });
        console.log('ooh ohhh glory to your name i shout it loud.........')
        //console.log(this.state.credential)
    
      }

    fileChangedHandler = event => {
        this.setState({
          selectedFile: event.target.files[0]
        })
     
        let reader = new FileReader();
         
        reader.onloadend = () => {
          this.setState({
            imagePreviewUrl: reader.result
          });
        }
     
        reader.readAsDataURL(event.target.files[0])

        this.setState({
            image: event.target.files[0]
          })
     
      }

        handleSubmit = (e) => {
        e.preventDefault()
          console.log(this.state.image)
          console.log('upload submit check')
        //e.preventDefault();
        let form_data = new FormData();
        form_data.append('image', this.state.image);
        form_data.append('title', this.state.title);
        for (var key of form_data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
    
        let data = new FormData();
   // data.append('image', newItem.image);
    //data.append('name', newItem.name);
        console.log(form_data)
        fetch('http://localhost:3001/api/gifs/upload', {method :'POST',
        headers: { 'Connection': 'keep-alive',
        
           },
        
           body:form_data,
           
        }).then(()=>this.props.history.push('./HomePage'))

      
       
        
      };


render(){

    let $imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
    }

return(

<div>
<h1></h1><input placeholder='please enter title' onChange={this.handleChange} value={this.state.title}></input><br></br><br></br>

<form action="upload.php" method="post" enctype="multipart/form-data">

<input type="file" name="avatar" onChange={this.fileChangedHandler}  />

{ $imagePreview }
<button type="button" onClick={this.handleSubmit} > Upload </button>


</form>

</div>


)







}




}

export default CreateGifs;