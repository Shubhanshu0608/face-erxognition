import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'
import './App.css'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import 'tachyons';
const app = new Clarifai.App({
  apiKey: '76bbd38751b947569ffc9fa4d757a7e8',
  apiKey: 'b3563a498c0748ae856ea417ef706f4a'
 });
 
 const particlesOptions = {
   particles: {
     number: {
       value: 100,
       density: {
         enable: true,
         value_area: 800
       }
     }
   },
   "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  }

 };
class App extends Component{
  constructor(){
    super();
    this.state ={
      input :'',
      imageUrl:'',
      box:{},
      route:'signin',
      isSignedIn: false
    }
  }
  calculateFaceLocation =(data)=>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  displayfaceBox =(box)=>{
    console.log(box);
    this.setState({box:box});
  }
  onInpuutChange =(event)=>{
    this.setState({input: event.target.value});
  }
  onButtonSubmit =()=>{
    this.setState({imageUrl:this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
        .then( response=>this.displayfaceBox(this.calculateFaceLocation(response)))         
        .catch(err=> console.log(err))  ;    
  }

  onRouteChange=(route)=>{
    if (route === 'signout'){
      this.setState({isSignedIn: false})
    }else if (route==='home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }


  render(){
  return (
    <div className="App">
      <Particles className='particles'
                params={particlesOptions}
                />
      <Navigation isSignedIn={this.state.isSignedIn}     onRouteChange={this.onRouteChange} />
        { this.state.route==="home"
          ?  <div>
            < Logo />
            < Rank />
            <ImageLinkForm 
                onInputChange={this.onInpuutChange} 
                onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />

          </div>
          : (
            this.state.route==='signin'
            ? <Signin onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange}/>
            )
          
          
          
        }
      </div>
  );
  
}
}
export default App;
/*
import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import './App.css'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'

import 'tachyons';

const app = new Clarifai.App({
  apiKey: 'b3563a498c0748ae856ea417ef706f4a'
});
const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends Component{
  constructor(){
    super();
    this.state ={
      input :'',
      imageUrl:''
    }
    
  }



  onInpuutChange =(event)=>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit =()=>{
    this.setState({imageUrl:this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
        .then( 
          function(response){
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
          },
          function(err){
            console.log(err)
          }
        );
        
        
      
        
    
  }
  render(){
  return (
    <div className="App">
      <Particles className='particles'
                params={particlesOptions}
                />
                    
        
    
      <Navigation />
      < Logo />
      < Rank />
      <ImageLinkForm 
          onInputChange={this.onInpuutChange} 
          onButtonSubmit={this.onButtonSubmit}
      />
     
      <FaceRecognition imageUrl={this.state.imageUrl} />

     
    </div>
  );
  }
}

export default App;*/
