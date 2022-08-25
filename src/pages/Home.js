import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa';

export default function Home() {
    return(
        <div className="home">
            <Container>
                <h1 className='home-header'>Engineer. Web Developer. Designer.</h1>
                <div className='home-icons'>
                    <FaLinkedin size={30}/>
                    <a href = "https://www.linkedin.com/in/jane-cabanayan" className="linkedin-link" target="_blank"><b>LinkedIn</b></a>
                    <br />
                    <FaGithub size={30}/>
                    <a href = "https://github.com/ayeejane" className="github-link" target="_blank"><b>Github</b></a>
                    <br />
                    <FaMailBulk size={30}/>
                    <a href="mailto:cabanayan.jane@gmail.com" className="email-link"><b>Email</b></a>  
                    <br />
                </div>
            </Container>
        </div>
    )
}