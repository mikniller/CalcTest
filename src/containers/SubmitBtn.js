import $ from 'jquery';
import React,{ Component }  from 'react';  
import { connect } from 'react-redux';
import { toogleFetchStatus,updateData } from '../actions'
import { Button } from 'react-bootstrap';

class SubmitBtn extends Component{
   constructor(props) {
    super(props);
    this.state = {dispatch:props.dispatch};
    this.submit = this.submit.bind(this);
  }

  submit(e) {
     var disp =this.state.dispatch; 
     disp(toogleFetchStatus(true));
     $.ajax({
        method: "POST",
        // url: "http://Calculator.localhost/Api/Values",
        url: "http://localhost:54187/Api/Values",
        data:this.props.input,
        dataType: "json",
          done : function(result) {
       
          disp(toogleFetchStatus(false));
          disp(updateData(result));
          },
          error : function(result) {
            disp(toogleFetchStatus(false));
          },
          success : function(result) {
            disp(toogleFetchStatus(false));
            disp(updateData(result));
          }});
  }
  
  
  render() {  

    return (
      <Button onClick={this.submit} >
        Opdater {this.props.input.CFFIType}
      </Button>
      
     )}
};

function mapStateToProps(state) {
  return {
   input:state.input
  };
}


export default connect(mapStateToProps)(SubmitBtn);

