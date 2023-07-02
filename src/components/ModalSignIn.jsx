import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export const ModalSignIn = ({ showModal, closeModal }) => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const handleChangePassword = () => setShowChangePassword(!showChangePassword);
  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Ingresar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {showChangePassword ? (
            <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Repita Password</Form.Label>
            <Form.Control type="password" placeholder="Repita Password" />
          </Form.Group>
          ) : (
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Guardar Clave" />
          </Form.Group> 
          )}
        
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" type="submit">
            Enviar
          </Button>
        <Button variant="primary" onClick={closeModal}>
          Cerrar
        </Button>
        <Button variant="secondary" onClick={handleChangePassword}>
          {showChangePassword ? "Listo" : "Recuperar Clave"}
        </Button>
      </Modal.Footer>
    </Modal >
  )
};