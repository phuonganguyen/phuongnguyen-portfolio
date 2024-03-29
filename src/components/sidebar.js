import React,{Component} from 'react';
import profilePic from '../images/profile_pic.jpeg';
import {Navbar, Nav} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default class Sidebar extends Component{
    render(){
        return(
            <Navbar expand="lg" className="sidebar" variant="dark" fixed="top">
                <Navbar.Brand href="#home">
                    <span className="d-block d-lg-none">Phuong Nguyen</span>
                    <div className="d-none d-lg-block">
                        <Image src={profilePic} fluid roundedCircle className="img-profile" />
                        <h1 className="name">Phuong Nguyen</h1>
                        <h2 className="title">Software Engineer</h2>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle className="navbar-toggler collapsed" data-toggle="collapse" aria-controls="basic-navbar-nav" data-target="#basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#experience">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#skills">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="#">My CV</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <div className="contact d-none d-lg-block">
                    <span>Get In touch</span>
                    <div className="social-icons">
                        <a rel="me" href="https://www.linkedin.com/in/phuong-nguyen-5b214862/" className="button button-icon">
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a rel="me" href="https://github.com/phuonganguyen" className="button button-icon">
                            <i className="fa fa-github-square"></i>
                        </a>
                        <a rel="me" href="#" className="button button-icon">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a rel="me" href="#" className="button button-icon">
                            <i className="fa fa-twitter-square"></i>
                        </a>
                    </div>
                </div>
            </Navbar>
        );
    }
}