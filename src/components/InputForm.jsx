import React from "react";
import classes from '../style/InputForm.module.scss'

class inputForm extends React.Component{
  constructor(props){
    super(props)
  }
  handleEventBubbling(e){
    this.props.changeInputValue(e.target.value)
  }
  handleKeyPress(e){
    if (e.charCode === 13) {
      this.props.pressedEnter()
    }
  }
  render(){
    return(
      <input 
        type="text" 
        className=""
        placeholder="Введите название города"
        value={this.props.inputValue} 
        onChange={(e) => this.handleEventBubbling(e)}
        onKeyPress={(e) => this.handleKeyPress(e)}
      />
    )
  }
}

export default inputForm