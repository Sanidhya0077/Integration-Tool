import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AddEditFunctionalityDetails({ mode }) {
    let { itemId } = useParams();
    const [formData, setFormData] = useState({
        productGroup: '',
        name: '',
        functionalityCode: '',
        description: '',
        action: ''
    });

    const [productGroupError, setProductGroupError] = useState('');
    const [nameError, setNameError] = useState('');
    const [functionalityCodeError, setFunctionalityCodeError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [actionError, setActionError] = useState('');

    useEffect(() => {
        if (mode === 'edit' && itemId) {
            // axios.get(`apiUrl/${itemId}`)
            //     .then(response => {
            //         const { data } = response;
            //         setFormData(data);
            //     })
            //     .catch(error => {
            //         console.error('Error fetching data:', error);
            //     });
        }
    }, [mode, itemId]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));

        switch (id) {
            case 'productGroup':
                setProductGroupError(value ? '' : 'Product group is required');
                break;
            case 'name':
                setNameError(value ? '' : 'Name is required');
                break;
            case 'functionalityCode':
                setFunctionalityCodeError(value ? '' : 'Functionality code is required');
                break;
            case 'description':
                setDescriptionError(value ? '' : 'Description is required');
                break;
            case 'action':
                setActionError(value ? '' : 'Action is required');
                break;
            default:
                break;
        }
    };

    const handleSave = () => {
        const errors = {};
        if (!formData.productGroup) {
            errors.productGroup = 'Product group is required';
        }
        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.functionalityCode) {
            errors.functionalityCode = 'Functionality code is required';
        }
        if (!formData.description) {
            errors.description = 'Description is required';
        }
        if (!formData.action) {
            errors.action = 'Action is required';
        }

        if (Object.keys(errors).length > 0) {
            setProductGroupError(errors.productGroup || '');
            setNameError(errors.name || '');
            setFunctionalityCodeError(errors.functionalityCode || '');
            setDescriptionError(errors.description || '');
            setActionError(errors.action || '');
            return;
        }

        const dataToSend = { ...formData };

        if (mode === 'add') {
            // axios.post('apiUrl', dataToSend)
            //     .then(response => {
            //         console.log('Functionality details added successfully', response.data);
            //     })
            //     .catch(error => {
            //         console.error('Error:', error);
            //     });
        } else if (mode === 'edit' && itemId) {
            // axios.put(`apiUrl/${itemId}`, dataToSend)
            //     .then(response => {
            //         console.log('Functionality details updated successfully', response.data);
            //     })
            //     .catch(error => {
            //         console.error('Error:', error);
            //     });
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h6 className="text-center font-weight-bold mb-4">{mode === 'add' ? 'Add Functionality Details' : 'Edit Functionality Details'}</h6>
                    <Form>
                        <Form.Group as={Row} className="mt-3" controlId="productGroup">
                            <Form.Label column sm="4">Product Group</Form.Label>
                            <Col sm="8">
                                <Form.Select defaultValue="" onChange={handleChange}>
                                    <option value="">Select Product Group</option>
                                    <option value="group1">Group 1</option>
                                    <option value="group2">Group 2</option>
                                    <option value="group3">Group 3</option>
                                </Form.Select>
                                {productGroupError && <Form.Text className="text-danger">{productGroupError}</Form.Text>}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mt-3" controlId="name">
                            <Form.Label column sm="4">Name</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
                                {nameError && <Form.Text className="text-danger">{nameError}</Form.Text>}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mt-3" controlId="functionalityCode">
                            <Form.Label column sm="4">Functionality Code</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="Functionality Code" value={formData.functionalityCode} onChange={handleChange} />
                                {functionalityCodeError && <Form.Text className="text-danger">{functionalityCodeError}</Form.Text>}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mt-3" controlId="description">
                            <Form.Label column sm="4">Description</Form.Label>
                            <Col sm="8">
                                <Form.Control as="textarea" placeholder="Description" value={formData.description} onChange={handleChange} />
                                {descriptionError && <Form.Text className="text-danger">{descriptionError}</Form.Text>}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mt-3" controlId="action">
                            <Form.Label column sm="4">Action - Enable/Disable</Form.Label>
                            <Col sm="8">
                                <Form.Select defaultValue="" onChange={handleChange}>
                                    <option value="">Select Action</option>
                                    <option value="enable">Enable</option>
                                    <option value="disable">Disable</option>
                                </Form.Select>
                                {actionError && <Form.Text className="text-danger">{actionError}</Form.Text>}
                            </Col>
                        </Form.Group>

                        <Row className="mt-3">
                            <Col sm={12} className="d-flex justify-content-end">
                                <Button variant="primary" onClick={handleSave} className="custom-save-btn">Save</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddEditFunctionalityDetails;