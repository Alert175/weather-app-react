import React from "react";

class SendButton extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <button onClick={()=>this.props.clickButton()}>Отправить</button>
    )
  }
}

export default SendButton