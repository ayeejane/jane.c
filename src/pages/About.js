import React from 'react';
import { Container, Col, Image, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import jcresume from '../assets/resume.pdf';
import avatar from '../assets/avatar.png';

export default class About extends React.Component {
    render() {
        return(
            <div className='About'>
                <Container className='about-container'>
                    <Row className="justify-content-md-center">
                        <Col md={4}>
                            <div className='avatar'>
                                <Image src={avatar} className='img-fluid responsive' alt='Profile Image'></Image>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className='about-desc'>
                                <b className='about-heading'>Hello it's me, <i>Jane.</i></b>
                                <p>
                                    Software Engineer with a focus on Front-End Development. Passionate about UI/UX design 
                                    and everything in between. Web design and development help me free my creative 
                                    mind. I pay attention to the smallest details when working on a project, making
                                    sure to produce simple, yet beautiful websites with great user experience. 
                                </p>
                                <div className="about-resume"> 
                                    <FontAwesomeIcon icon={faLink} />
                                    <a href={jcresume} target="_blank" style={{ color: '#F6EABE' }}><b>Resume</b></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}