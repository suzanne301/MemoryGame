import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Instructions = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
       <>
            <Button variant="primary" onClick={handleShow}>Instructions</Button>

            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>How to play ... </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Super simple game!  Just click on two cards to find a matching pair.  Lots of luck!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>
      </>
    );
}
 
export default Instructions;