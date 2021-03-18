// @ts-ignore
import React, { useState } from 'react';
import FetchCountries from '../Fetch-products/Fetch-products';
import { Button, Modal } from 'react-bootstrap';

// import axios
import axios from "axios";


const App = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="app">
      <div className="container pt-5">
        {/* modal begin */}
        <Button variant="primary" onClick={handleShow}>
          Cerca un prodotto
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Cerca un prodotto</Modal.Title>
          </Modal.Header>
          <Modal.Body><FetchCountries /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Chiudi
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Salva prodotto
            </Button>
          </Modal.Footer>
        </Modal>
        {/* modal end */}

      </div>
    </div>
  );
}

export default App;
