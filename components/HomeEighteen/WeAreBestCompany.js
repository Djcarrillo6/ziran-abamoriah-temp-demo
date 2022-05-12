import React, { Component } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

class WeAreBestCompany extends Component {
    render() {
        return (
            <div className="call-to-action ptb-100">
                <div className="container">
                    <div className="call-to-action-content">
                        <ScrollAnimation 
                            animateIn='fadeInUp'
                            initiallyVisible={true}
                            animateOnce={true} 
                        >
                            <div className="section-title">
                                <span>We are a Best Company</span>
                                <h2>Ready to <b>Work</b> With Us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <Link href="#contact">
                                    <a className="btn btn-primary">Contact Us</a>
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeAreBestCompany;