import React from "react";
import classes from '../style/MessageContainer.module.scss'

class MessageContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      coordValue: -100
    }
  }
  componentDidMount(){
    /* Анимация появления элемента */
    setTimeout(() => {
      this.setState({
        coordValue: 0
      })
    }, 1000 * .25);
    /* анимация скрытия элемента */
    setTimeout(() => {
      this.setState({
        coordValue: -100
      })
    }, 1000 * 4.75);
    setTimeout(() => {
      this.props.changeShowMessage()
    }, 1000 * 5);
  }
  render(){
    return(
      <div 
        style={{transform: `translateY(${this.state.coordValue}%)`}}
        className={classes.Container}
      >
        {this.props.message}
      </div>
    )
  }
}

export default MessageContainer