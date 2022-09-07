import React, {useState} from 'react';
import { Button, Container, Col, Form, Image, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import connectPic from '../assets/connect-pic.png';

export default function Connect() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && message) {
            const templateParams = {
                name,
                message, 
                email
            };
            
            emailjs.send(
                process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, 
                templateParams, process.env.REACT_APP_USER_ID
            )
            .then(
                (result) => {
                  alert('Thank you for your message! Be in touch soon.');
                  console.log(result.text);
                },
                (error) => {
                  console.log(error.text);
                }
              );

            setName('');
            setMessage('');
            setEmail('');
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div className='Connect'>
            <Container>
                <Row>
                    <Col md={6}>
                    <h1>Get in Touch.</h1>
                    <p> Want to connect with me or collaborate on projects together?
                        Send me a message and I'll reply as soon as I can. Thanks!
                    </p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-2">
                                <Form.Control 
                                    type="text" 
                                    value={name} 
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Full Name"
                                />
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Control 
                                    type="email" 
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                />
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Control 
                                    as="textarea" 
                                    value={message} 
                                    onChange={e => setMessage(e.target.value)}
                                    placeholder="Your message..."
                                    rows={4} 
                                />
                            </Form.Group>
                            <Button type="submit" className='send-btn'>Send Message</Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Image src={connectPic} className='img-fluid responsive' alt='Image'></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    ); 
}