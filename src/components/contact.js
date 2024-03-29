import React,{Component} from 'react';

export default class Contact extends Component{
    render(){
        return(
            <section id="contact" className="contact-section p-3 p-lg-5 d-flex align-items-center">
                <div className="w-100">
                    <h2 className="mb-5 title">Contact Me</h2>
                    <p>I am available for hire and open to any ideas of cooperation.</p>
                    <dl>
                        <dt>E-mail:</dt>
                        <dd>
                            <a href="mailto:phuong.nguyenanh06@gmail.com">
                                <i className=" fa fa-envelope"></i>
                                phuong.nguyenanh06@gmail.com
                            </a>
                        </dd>
                        <dt>&nbsp;</dt><dd></dd>
                        <dt>LinkedIn:</dt>
                        <dd>
                            <a href="https://www.linkedin.com/in/phuong-nguyen-5b214862/">
                                <i className="fa fa-linkedin-square"></i>
                                Phuong Nguyen
                            </a>
                        </dd>
                        <dt>Github:</dt>
                        <dd>
                            <a href="https://github.com/phuonganguyen">
                                <i className="fa fa-github-square"></i>
                                phuonganguyen
                            </a>
                        </dd>
                        <dt>Facebook:</dt>
                        <dd>
                            <a href="https://github.com/phuonganguyen">
                                <i className="fa fa-facebook-square"></i>
                                Phuong Nguyen
                            </a>
                        </dd>
                        <dt>Twitter:</dt>
                        <dd>
                            <a href="https://github.com/phuonganguyen">
                                <i className="fa fa-twitter-square"></i>
                                Phuong Nguyen
                            </a>
                        </dd>
                    </dl>
                </div>
            </section>
        );
    }
}