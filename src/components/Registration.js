import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        companyEmailId: '',
        password: '',
        confirmPassword: ''
    });

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [companyError, setCompanyError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));

        switch (id) {
            case 'firstName':
                setFirstNameError(value ? '' : 'First name is required');
                break;
            case 'lastName':
                setLastNameError(value ? '' : 'Last name is required');
                break;
            case 'company':
                setCompanyError(value ? '' : 'Company name is required');
                break;
            case 'companyEmailId':
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const isValidEmail = emailPattern.test(value);
                setEmailError(isValidEmail ? '' : 'Please enter a valid email address');
                break;
            case 'password':
                setPasswordError(value ? '' : 'Password is required');
                break;
            case 'confirmPassword':
                setPasswordError(formData.password === value ? '' : 'Passwords do not match');
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        const errors = {};
        if (!formData.firstName) {
            errors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
            errors.lastName = 'Last name is required';
        }
        if (!formData.company) {
            errors.company = 'Company name is required';
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.companyEmailId || !emailPattern.test(formData.companyEmailId)) {
            errors.companyEmailId = 'Please enter a valid email address';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(errors).length > 0) {
            setFirstNameError(errors.firstName || '');
            setLastNameError(errors.lastName || '');
            setCompanyError(errors.company || '');
            setEmailError(errors.companyEmailId || '');
            setPasswordError(errors.password || '');
            return;
        }

        const dataToSend = { ...formData };

        // axios.post('', dataToSend)
        //     .then(response => {
        //         console.log('Registration successful', response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
    };

    return (
        <div className="registration-form d-flex justify-content-center align-items-center">
            <Form className="w-25">
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Control type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    {firstNameError && <Form.Text className="text-danger">{firstNameError}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Control type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                    {lastNameError && <Form.Text className="text-danger">{lastNameError}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="company">
                    <Form.Control type="text" placeholder="Company" value={formData.company} onChange={handleChange} />
                    {companyError && <Form.Text className="text-danger">{companyError}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="companyEmailId">
                    <Form.Control type="email" placeholder="Company Email ID" value={formData.companyEmailId} onChange={handleChange} />
                    {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Control type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                    {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
                </Form.Group>

                <div className="d-grid gap-1 mt-3">
                    <Button type="button" style={{ backgroundColor: '#0E1734' }} onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>

            </Form>
        </div>
    );
}

export default Registration;