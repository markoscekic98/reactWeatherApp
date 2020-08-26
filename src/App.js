import React,{Component} from 'react';
import './App.css';
import NavBar from './components/htmlNav';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from  './components/contact';
// import Home from './components/home';
import Weather from './components/weatherAxios';
// import axios from 'axios'
// import Weather from './components/weatherAxios';
class App extends Component {
  state={
    type:null,
    temp:null,
    weatherPic:null
}


  render(){
   
     
   
  return (
    
    <BrowserRouter>
     <div className="App">
      <NavBar />
    {/* <Weather /> */}
     <Route path='/weather' component={Weather} />
      <Route path='/contact' component={Contact} />

    
    {/* <Home /> */}
    {/* <Weather addData={this.addData}/> */}
    </div>
    </BrowserRouter>
    
  );
  }
}

export default App;
