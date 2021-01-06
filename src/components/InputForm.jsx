import React from "react";

class inputForm extends React.Component{
  constructor(props){
    super(props)
  }
  handleEventBubbling(e){
    this.props.changeInputValue(e.target.value)
  }
  render(){
    return(
      <input 
        type="text" 
        className="uk-input"
        placeholder="Введите название города"
        value={this.props.inputValue} 
        onChange={(e) => this.handleEventBubbling(e)}
      />
    )
  }
}

export default inputForm