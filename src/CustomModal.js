import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";



class CustomModal extends Component{


  render(){

    const {isOpen,hideModal} = this.props;


    return (
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>Заголовок</Modal.Header>
        <Modal.Body>Тело</Modal.Body>
        <Modal.Footer>
          <button>Save</button>
          <button onClick={hideModal}>Отмена</button>
        </Modal.Footer>
      </Modal>
      )
  }

}

export default CustomModal;
