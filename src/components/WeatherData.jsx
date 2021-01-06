import React from 'react'
import classes from '../style/weatherData.module.scss'

class WeatherData extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={classes.wrapper}>
        <img src={`http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`} alt={this.props.data.weather[0].description}/>
        <div>{this.props.data.weather[0].description}</div>
        <div>Текущая температура: {Math.floor(Number(this.props.data.main.temp) - Number(273,15))} &deg;С</div>
        <div>Температура ощущается: {Math.floor(Number(this.props.data.main.feels_like) - Number(273,15))} &deg;С</div>
        <div>Влажность воздуха: {Math.floor(Number(this.props.data.main.humidity))} %</div>
        <div>Скорость ветра: {Number(this.props.data.wind.speed)} м/с</div>
        <div>Минимальная температура: {Math.floor(Number(this.props.data.main.temp_min) - Number(273,15))} &deg;С</div>
        <div>Максимальная температура: {Math.floor(Number(this.props.data.main.temp_max) - Number(273,15))} &deg;С</div>
      </div>
    )
  }
}

export default WeatherData