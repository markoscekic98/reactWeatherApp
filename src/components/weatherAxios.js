import React, {Component} from 'react'
import axios from 'axios'

class Weather extends Component{
//    state={
//        type:null,
//        temp:null,
//        weatherPic:null
//    }// state for weather
   state={
    url:null,
    title:null
   // weatherPic:null
}
    render(){
        //`https://jsonplaceholder.typicode.com/photos ` 
        const adress = `http://api.openweathermap.org/data/2.5/weather?q=belgrade&units=metric&appid=26692f48a8e543adb52cb09a3abfcb67`;
        axios.get(adress)
        .then(response =>{
        // console.log(response.data[0]);
            // const pic1 = response.data[0].url;
            // const pic1Title =response.data[0].title;
            // this.setState({
            //     url:pic1,
            //     title:pic1Title
            //         });

            // W e a t h e r
          
          console.log(response.data.weather);
          const weatherObj = response.data.weather;
          const weather =weatherObj[0].main;
          const weatherPicture = `http://openweathermap.org/img/wn/${weatherObj[0].icon}@2x.png`;
          const temperature = response.data.main.temp;
          //console.log(temperature);
            this.setState({
                type:weather,
                temp:temperature,
                weatherPic:weatherPicture
            });
            
        });
        
       
    return(
       
       <div className="collumns has-background-black ">
           <div className="collumn center has-text-grey-light">
            <img src={this.state.weatherPic} title={this.state.weather}/>
            <p>Belgrade</p>
            <p>Temperature: {this.state.temp}</p>
            <p>Weather: {this.state.type}</p>
            </div>
        </div>
    );
    }
}
export default Weather;