import React, {Component} from 'react';
import StrAddButton from './StrAddButton';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return(
      <div className="App-header">
        <h1>코딩병원에 오신 것을 환영합니다.</h1>
        <span>{this.props.str}</span>
        <br/>
        <StrAddButton AddProp="100"/>
      </div>
    )
  }
}
let mapStateToProps = (state, props) => {
  console.log(props.indexProp)
  return {
    str:state.data.str
  };
};

App = connect(mapStateToProps, null)(App);

export default App;