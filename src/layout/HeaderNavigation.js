import React, {Component}  from 'react';

export default class HeaderNavigation extends React.Component {

 
  render() {
    return (
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#"><img src="./src/schantz_logo_large.gif" height="20" width="120" /></a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <p className="nav navbar-text">Modulariseret beregningskerne test app</p>

    </div>
  </div>
</nav>
    );
  }
}