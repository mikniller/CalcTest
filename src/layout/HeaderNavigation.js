import React, {Component}  from 'react';
import { Navbar,Nav,NavItem,Button,FormControl} from 'react-bootstrap';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import IncomeInput from "../containers/IncomeInput"


export default class HeaderNavigation extends React.Component {

  openModal(){
       ModalManager.open(<IncomeInput text="halløj" onRequestClose={() => true}  panelType="panel-primary"/>);
    }

  render() {
    return (
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">Logo</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li className=""><a href="#">Graf</a></li>
        <li className=""><a href="#">Tabel</a></li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
}