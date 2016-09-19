import $ from 'jquery';
import React from 'react';  
import { connect } from 'react-redux';
import { toogleFetchStatus,updateData } from '../actions'
import { Button } from 'react-bootstrap';

const SubmitBtn = React.createClass({
  
  submit : function(e) {
     var disp =this.props.dispatch; 
     disp(toogleFetchStatus(true));
     $.ajax({
        method: "POST",
        url: "http://localhost:54187/Api/Values",
        data:this.props.input,
        dataType: "json",
          done : function(result) {
          console.log(result);
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
  },
  
  
  render: function() {  
    return (
      <Button onClick={this.submit} >
        Opdater
      </Button>
     )}
});

function mapStateToProps(state) {
  return {
   input:state.calculationData.input
  };
}


export default connect(mapStateToProps)(SubmitBtn);

