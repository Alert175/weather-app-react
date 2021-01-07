import React from "react";
import classes from '../style/SendButton.module.scss'

class SendButton extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <button onClick={()=>this.props.clickButton()}>Узнать погоду</button>
    )
  }
}

export default SendButton