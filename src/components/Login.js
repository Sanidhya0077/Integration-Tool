import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        companyEmailId: '',
        password: ''
    });

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));

        switch (id) {
            case 'companyEmailId':
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const isValidEmail = emailPattern.test(value);
                setEmailError(isValidEmail ? '' : 'Please enter a valid email address');
                break;
            case 'password':
                setPasswordError(value ? '' : 'Password is required');
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        const errors = {};
        if (!formData.companyEmailId) {
            errors.companyEmailId = 'Email is required';
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.companyEmailId)) {
                errors.companyEmailId = 'Please enter a valid email address';
            }
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }

        if (Object.keys(errors).length > 0) {
            setEmailError(errors.companyEmailId || '');
            setPasswordError(errors.password || '');
            return;
        }

        const dataToSend = { ...formData };

        // axios.post('', dataToSend)
        //     .then(response => {
        //         console.log('Login successful:', response.data);
        //     })
        //     .catch(error => {
        //         console.error('Login failed:', error);
        //     });
    };

    return (
        <div className="login-form d-flex justify-content-center align-items-center">
            <Form className="w-25">
                <Form.Group className="mb-3" controlId="companyEmailId">
                    <Form.Control type="email" placeholder="Email" value={formData.companyEmailId} onChange={handleChange} />
                    {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Control type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
                </Form.Group>

                <div className="d-grid gap-1 mt-3">
                    <Button type="button" style={{ backgroundColor: '#0E1734' }} onClick={handleSubmit}>
                        Login
                    </Button>
                </div>

            </Form>
        </div>
    );
}

export default Login;