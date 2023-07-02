import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export const ModalSignIn = ({ showModal, closeModal }) => (
  <Modal
    show={showModal}
    onHide={closeModal}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      I will not close if you click outside me. Don not even try to press
      escape key.
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={closeModal}>
        Close
      </Button>
      <Button variant="primary" onClick={closeModal}>Understood</Button>
    </Modal.Footer>
  </Modal>
)