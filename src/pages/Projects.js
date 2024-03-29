import React from 'react';
import { Card, Container, Col, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import {faImage} from '@fortawesome/free-regular-svg-icons';

import eureqa from '../assets/eureqa.png';
import gotgainz from '../assets/gotgainz.png';

export default class Projects extends React.Component {
    render() {
        return (
            <div className='Projects'>
                <Container fluid='lg'> 
                    <Row className='mb-4'>
                        <Col lg={4}>
                            <Card style={{ width: '18rem', height: '18rem'}}>
                                <Image src={eureqa} className='img-fluid' alt='EureQa Logo'></Image>
                            </Card>
                        </Col>
                        <Col lg={8}>
                            <h2>EureQa</h2>
                            <div className='eureqa-container'>
                                <p> 
                                    A question-and-answer mobile application built to create a community 
                                    driven service that allows users to ask and/or answer questions to problems 
                                    they have. It provides tools for collaboration between users through chat 
                                    messaging and video calls and features questions and answers on a wide range
                                    of topics including lifestyle, technology, household, and academics. 
                                </p>
                            </div>
                            <div className='projects-icons'>
                                <FontAwesomeIcon icon={faCodeBranch} />
                                <a href = "https://github.com/ayeejane/project-eureka-flutter" target="_blank" style={{ color: ' #F6EABE' }}>Github</a>
                                <FontAwesomeIcon icon={faPlayCircle} />
                                <a href = "https://www.youtube.com/watch?v=K7oCw8ajz5w&ab_channel=TonyNguyen" target="_blank" style={{ color: '#F6EABE' }}>Demo</a>
                                <FontAwesomeIcon icon={faImage} />
                                <a href = "https://www.figma.com/file/GK3OgdkNJ5GQIXjFfRy83p/Mobile-Designs?node-id=0%3A1" target="_blank" style={{ color: '#F6EABE' }}>Figma</a>
                            </div>
                        </Col>
                    </Row>
    
                    <Row>
                        <Col lg={4}>
                            <Card style={{ width: '18rem', height: '18rem'}}>
                                <Image src={gotgainz} className='img-fluid' alt='GotGainz Logo'></Image>
                            </Card>
                        </Col>
                        <Col lg={8}>
                            <h2>Got Gainz</h2>
                            <div className='gotgainz-container'>
                                <p> 
                                    A fitness mobile application designed to give the user a personal fitness trainer on the go. 
                                    This app provide users the opportunity to track personal goals such as their current weight, 
                                    height and age. It includes features such as a timer, reminders, and custom workouts catered 
                                    to the individual's fitness goal. 
                                </p>
                            </div>
                            <div className='projects-icons'>
                                <FontAwesomeIcon icon={faCodeBranch} />
                                <a href = "https://github.com/ayeejane/Got-Gainz" target="_blank" style={{ color: ' #F6EABE' }}>Github</a>
                                <FontAwesomeIcon icon={faPlayCircle} />
                                <a href = "https://www.youtube.com/watch?v=QqPSf_KAQnw&ab_channel=TonyNguyen" target="_blank" style={{ color: ' #F6EABE' }}>Demo</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}