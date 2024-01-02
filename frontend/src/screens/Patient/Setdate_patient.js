import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, FormLabel, FormControl, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const AppointmentForm = () => {
  const [dateTime, setDateTime] = useState('');
  const [services, setServices] = useState([]);
  const [dentists, setDentists] = useState([]);
  const [selectedDentist, setSelectedDentist] = useState('');
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    // Fetch services
    axios.get('http://localhost:5000/api/services/getAllService')
      .then(response => {
        const services = response.data;
        setServices(services);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });

    // Fetch dentists
    axios.get('http://localhost:5000/api/users/getAllUser')
      .then(response => {
        const dentists = response.data;
        setDentists(dentists);
      })
      .catch(error => {
        console.error('Error fetching dentists:', error);
      });
  }, []);

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleCancel = () => {
    // Reset the form
    setDateTime('');
    setSelectedService([]);
    setSelectedDentist('');
  };
  const handleServiceChange = (event) => {
    const serviceId = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedService([...selectedService, serviceId]);
    } else {
      setSelectedService(selectedService.filter((service) => service !== serviceId));
    }
  };

  const handleDentistChange = (e) => {
    setSelectedDentist(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data
    console.log('Date & Time:', dateTime);
    console.log('Services:', selectedService);
    console.log('Dentist:', selectedDentist);
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit} style={{ width: '500px' }}>
          <FormGroup>
            <FormLabel>Thời gian:</FormLabel>
            <FormControl
              type="datetime-local"
              value={dateTime}
              onChange={handleDateTimeChange}
              required
            />
          </FormGroup>

          <FormGroup>
  <FormLabel>Dịch vụ sử dụng:</FormLabel>
  <FormGroup>
    {services.map(service => (
      <Form.Check
        key={service.MaDichVu}
        type="checkbox"
        label={service.TenDichVu}
        value={service.MaDichVu}
        required
        onChange={handleServiceChange}
      />
    ))}
  </FormGroup>
</FormGroup>
          <FormGroup>
            <FormLabel>Chọn nha sĩ:</FormLabel>
            <FormControl
              as="select"
              value={selectedDentist}
              onChange={handleDentistChange}
              required
            >
              <option value="">-- Chọn nha sĩ --</option>
              {dentists.map(dentist => (
                <option key={dentist.MaNhaSi} value={dentist.MaNhaSi}>
                  {dentist.HoTen}
                </option>
              ))}
            </FormControl>
          </FormGroup>
          <Row className="justify-content-center d-flex" style={{ marginTop: '30px' }}>
            <Col sm={6} className="text-center">
              <Button type="submit" variant="primary" className="mr-2" onClick={handleSubmit}>
                Chấp nhận
              </Button>
              <Button type="button" variant="secondary" onClick={handleCancel} style={{ marginLeft: '30px' }}>
                Hủy
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default AppointmentForm;