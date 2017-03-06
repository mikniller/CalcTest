import $ from 'jquery';
import React,{ Component }  from 'react';
import { connect } from 'react-redux';
import { toogleFetchStatus,updateData } from '../actions'


class SubmitBtn extends Component{
   constructor(props) {
    super(props);
    this.state = {dispatch:props.dispatch};
    this.submit = this.submit.bind(this);
  }

  submit(e) {
     e.preventDefault();
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

      <button onClick={this.submit}
         className='primary btn btn-primary'>
          Opdater
       </button>
     )}
};

function mapStateToProps(state) {
  return {
   input:state.input
  };
}


export default connect(mapStateToProps)(SubmitBtn);
