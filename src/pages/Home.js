import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default class Home extends React.Component {
    render() {
        return(
            <div className='Home'>
                <Container>
                    <h1 className='home-header'>Engineer. Web Developer. Designer.</h1>
                    <div className='home-icons'>
                        <FaLinkedin size={30}/>
                        <a href = "https://www.linkedin.com/in/jane-cabanayan" className="linkedin-link" target="_blank"><b>LinkedIn</b></a>
                        <br />
                        <FaGithub size={30}/>
                        <a href = "https://github.com/ayeejane" className="github-link" target="_blank"><b>Github</b></a>
                        <br />
                    </div>
                </Container>
            </div>
        );
    }
}