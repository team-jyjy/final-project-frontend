import React, {Component} from 'react';
import {add} from './action';
import {connect} from 'react-redux';

class StrAddButton extends Component {
  render() {
    return ( 
      <input value="+100" type="button" onClick={this.props.addString}/>
    )
  }
}

let mapDispatchToProps = (dispatch, props)=>{
  console.log(props.AddProp)
  return {
    addString: ()=>dispatch(add())
  }
}

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;