import axios from 'axios';
import React from 'react'

import InputForm from "./components/InputForm.jsx";
import SendButton from "./components/SendButton.jsx";
import MessageContainer from "./components/MessageContainer.jsx";
import WeatherData from "./components/WeatherData.jsx";

import classes from './style/App.module.scss'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      apiKey: 'e060f8b95fe224512f7a8d5aaeecb617',
      locationName: '',
      errorStatus: false,
      errorMessage: '',
      statusSuccessFetch: false,
      weatherData: {}
    }
  }
  setLocationName(value){
    this.setState({
      locationName: value
    })
  }
  validateInputValue(){
    if(this.state.locationName){
      this.setState({
        locationName: this.state.locationName.replace(/\s+/g, '')
      })
      this.callWeatherAPI()
    } else {
      this.setState({
        errorStatus: true,
        errorMessage: 'Необходимо выбрать город'
      })
    }
  }
  async callWeatherAPI(){
    try{
      const responce = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.locationName}&lang=ru&appid=${this.state.apiKey}`)
      this.setState({
        weatherData: responce.data,
        statusSuccessFetch: true,
        locationName: ''
      })
    }
    catch(error){
      this.setState({
        errorStatus: true,
        errorMessage: 'Не удалось найти такой город',
        locationName: ''
      })
    }
  }
  changeErrorStatus(){
    this.setState({
      errorStatus: false
    })
  }
  render(){
    return(
      <div className={classes.wrapper}>
        <div className={classes.header}>Погода</div>
        {
          this.state.errorStatus
          ? <MessageContainer message={this.state.errorMessage} changeShowMessage={()=>this.changeErrorStatus()}/>
          : null
        }
        <InputForm 
          inputValue={this.state.locationName}
          changeInputValue={(value)=>this.setLocationName(value)}
          pressedEnter={()=>this.validateInputValue()}
        />
        <SendButton clickButton={()=>this.validateInputValue()}/>
        {
          this.state.statusSuccessFetch
          ? <WeatherData data={this.state.weatherData}/>
          : null
        }
      </div>
    )
  }
}

export default App;
