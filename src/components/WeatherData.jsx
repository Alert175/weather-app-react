import React from 'react'
import classes from '../style/weatherData.module.scss'

class WeatherData extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      coordValue: +100
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        coordValue: 0
      })
    }, 1000 * 0.25);
  }
  render(){
    return(
      <div className={classes.wrapper} style={{transform: `translateY(${this.state.coordValue}vh)`}}>
        <div className={classes.info}>
          <img src={`http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`} alt={this.props.data.weather[0].description}/>
          <div className={classes.text}>
            <div>{this.props.data.name}</div>
            <div>{this.props.data.weather[0].description}</div>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.staticText}>
            Текущая температура:
          </div>
          <div className={classes.dynamicText}>
            {Math.floor(Number(this.props.data.main.temp) - Number(273,15))} &deg;С
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.staticText}>
            Температура ощущается:
          </div>
          <div className={classes.dynamicText}>
            {Math.floor(Number(this.props.data.main.feels_like) - Number(273,15))} &deg;С
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.staticText}>
           Влажность воздуха:
          </div>
          <div className={classes.dynamicText}>
            {Math.floor(Number(this.props.data.main.humidity))} %
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.staticText}>
           Скорость ветра:
          </div>
          <div className={classes.dynamicText}>
            {Number(this.props.data.wind.speed)} м/с
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.staticText}>
            Минимальная температура:
          </div>
          <div className={classes.dynamicText}>
            {Math.floor(Number(this.props.data.main.temp_min) - Number(273,15))} &deg;С
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.staticText}>
           Максимальная температура:
          </div>
          <div className={classes.dynamicText}>
            {Math.floor(Number(this.props.data.main.temp_max) - Number(273,15))} &deg;С
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherData