import React, {Component} from 'react';
import Nav from './Components/Navigation/Nav';
import Logo from './Components/Logo/Logo';
import Link from './Components/Link/Link';
import User from './Components/User/User';
import Faces from './Components/Faces/Faces';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Particles from 'react-particles-js';
import './App.css';

const particles1 = { //Add interactivity too
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
  }
}

const initialState ={
  input : '',
  imageurl : '',
  box: {},
  route: 'Signin',
  isLoggedin: false,
  Profile: {
    id: '',
    name : '',
    email : '',
    joined: ''
  }
}

class App extends Component {
  constructor(){
    super();
    this.state= initialState;
  }

  load = (data) => {
    this.setState({Profile:{
      id: data.id,
      name : data.name,
      email : data.email,
      joined: data.joined
    }
  })}

  FaceLocation = (data =>{
    const Face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input1');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      left : Face.left_col * width,
      top : Face.top_row * height,
      right : width - (Face.right_col * width),
      bottom : height - (Face.bottom_row * height)
    };
  })

  displayBox = (box) =>{
    this.setState({box: box});
  }

  onInput = (event) =>{
    this.setState({input: event.target.value});
  }

  onSubmit =() =>{
    this.setState({imageurl: this.state.input});
    fetch('http://localhost:4000/image', {
            method: 'post',
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                input: this.state.input
            })
        })
        .then(response => response.json())
    .then(response => {
      this.displayBox(this.FaceLocation(response))
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) =>{
    if(route === 'Signout'){
      this.setState(initialState)
    }
    else if(route === 'home'){
      this.setState({isLoggedin: true})
    }
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particles1} />
        <Nav isLoggedin={this.state.isLoggedin} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
        ?<div>
          <Logo />
          <User name={this.state.Profile.name}/>
          <Link onInput={this.onInput} onSubmit={this.onSubmit}/>
          <Faces box={this.state.box} imageurl={this.state.imageurl}/>
        </div>
        :(this.state.route === 'Signin'
        ?<Signin load={this.load} onRouteChange={this.onRouteChange}/>
        :<Register load={this.load} onRouteChange={this.onRouteChange}/>
        )
        }
      </div>
    );
  }
}

export default App;
