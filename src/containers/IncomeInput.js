import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import classNames from 'classnames'

export default class IncomeInput extends Component{
   render(){
        const panelClassNames = classNames(
            'panel',
            this.props.panelType,
        )
      return (
         <Modal
            onRequestClose={this.props.onRequestClose}
            effect={Effect.ScaleUp}>

            <div className={panelClassNames} style={{borderColor:'#fff'}} >
            <div className="panel-heading">
                <div className="panel-title row">
                    <div className="col-xs-3">
                        <i className="glyphicon glyphicon-list"></i>
                    </div>
                    <div className="col-xs-9 text-right">
                        <div>Tilføj indtægt</div>
                    </div>
                </div>
            </div>
            <div className="panel-body">
            </div>
            <div  style={{margin:'10px'}}>
                <button type="button" className="btn btn-success small " >Gem</button>&nbsp;
                <button type="button" className="btn btn-warning small "  onClick={ModalManager.close}>Luk</button>
            </div>
        </div>   
         </Modal>
      );
   }
}



IncomeInput.propTypes = {
    onRequestClose: React.PropTypes.func.isRequired,
    panelType: React.PropTypes.string.isRequired
}
