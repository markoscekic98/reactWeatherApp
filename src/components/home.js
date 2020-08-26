import React from 'react';
const Home =(weather)=>{
  const cloudy ={
      name: 'Clouds',
      html:
        `  <div className="column Clouds is-hidden">
        <div class="icon" >
          <div class="cloud2 small-cloud"></div>
          <div class="cloud2"></div>
        </div>
        </div>
        <div className="column Rain">
        <div class="icon">
          <div class="cloud2"></div>
          <div class="rain"></div>
        </div>
        </div>`
      
  }
  const thundery = {
    name:'Thunderstorm',
    html:` <div className="column Thunderstorm is-hidden">
    <div class="icon" >
      <div class="cloud2"></div>
      <div class="thunder">
        <div class="bolt"></div>
        <div class="bolt"></div>
      </div>
    </div>
  </div>`
  }
  const sunny = {
    name:'Clear',
    html:`  <div className="column Clear">
    <div class="icon">
      <div class="rays">
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
      </div>
      <div class="sun"></div>
    </div>
    </div>`
  }
  const drizzly ={
    name:'Drizzle',
    html:` <div className="column Drizzle is-hidden">
    <div class="icon">
      <div class="cloud2"></div>
      <div class="drizzle"></div>
    </div>
    </div>`
  }
  const snowy ={
    name:'Snow',
    html:` <div className="column Snow is-hidden">
    <div class="icon">
      <div class="cloud2"></div>
      <div class="snow">
        <div class="flake"></div>
        <div class="flake"></div>
        <div class="flake"></div>
        <div class="flake"></div>
      </div>
    </div>
    </div> `
  }
  const windy={
    name:'Atmosphere',
    html:`<div className="column Atmosphere is-hidden">
    <div class="icon">
      <div class="extreme text-center">
        <div class="harsh-wind"></div>
        <div class="harsh-wind"></div>
        <div class="harsh-wind"></div>
        <div class="harsh-wind"></div>
        <div class="harsh-wind"></div>
        <div class="harsh-wind"></div>
        <div class="harsh-wind"></div>
      </div>
    </div>
    </div>`

    // weatherData =(data)=>{
    //   console.log(data);
    // }
  }
    return(
        
<div></div>

        
    );
}
export default Home