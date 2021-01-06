import React from "react";

class MessageContainer extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    setTimeout(() => {
      this.props.changeShowMessage()
    }, 1000 * 5);
  }
  render(){
    return(
      <div>{this.props.message}</div>
    )
  }
}

export default MessageContainer