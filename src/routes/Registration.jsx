import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { paisesSudamericanos, provinciasArgentinas } from '../utils/ubicaciones';

export const Registration = () => {
  const [validated, setValidated] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [isBirthDateValid, setBirthDateValid] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');

  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
    const today = new Date();
    const selectedDate = new Date(event.target.value);
    const ageDifference = today - selectedDate;
    const ageInYears = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365));
    setBirthDateValid(ageInYears >= 18);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || !isBirthDateValid) {
      event.stopPropagation();
    }
    setValidated(true);
  };


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        {/* Datepicker */}
        <Form.Group as={Col} md="4" controlId="validationCustomBirth">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <InputGroup hasValidation>

            <Form.Control
              type="date"
              placeholder="Fecha de nacimiento"
              value={birthDate}
              onChange={handleBirthDateChange}
              isInvalid={!isBirthDateValid}
              required
            />
            <Form.Control.Feedback type="invalid">
              Debe ser mayor de 18.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>


      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label><abbr title='Sólo de Argentina'>Provincia</abbr></Form.Label>
          <Form.Select
            value={selectedProvince}
            onChange={(event) => setSelectedProvince(event.target.value)}
            required
            disabled={!selectedCountry || selectedCountry !== 'Argentina'}
          >
            <option value="">Seleccionar provincia...</option>
            {provinciasArgentinas.map((provincia) => (
              <option key={provincia} value={provincia}>
                {provincia}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Ingrese una Provincia válida.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label><abbr title='Sólo América del Sur'>País</abbr></Form.Label>

          <Form.Select
            value={selectedCountry}
            onChange={(event) => setSelectedCountry(event.target.value)}
            required
          >
            <option value="">Seleccionar país...</option>
            {paisesSudamericanos.map((pais) => (
              <option key={pais} value={pais}>
                {pais}
              </option>
            ))}
          </Form.Select>


          <Form.Control.Feedback type="invalid">
            Ingrese un País válido.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" placeholder="DNI" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid DNI number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}