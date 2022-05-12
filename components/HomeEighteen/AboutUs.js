import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class AboutUsTwo extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100 bg-image2 overx-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="row about-image">
                                <div className="col-6 col-lg-6 col-md-6">
                                    <ScrollAnimation 
                                        animateIn='fadeInLeft'
                                        initiallyVisible={true}
                                        animateOnce={true}
                                    >
                                        <div className="image">
                                            <img src="/images/about-img1.jpg" alt="about" />
                                        </div> 
                                    </ScrollAnimation>
                                </div>
                                 
                                <div className="col-6 col-lg-6 col-md-6">
                                    <ScrollAnimation 
                                        animateIn='fadeInLeft'
                                        initiallyVisible={true}
                                        animateOnce={true}
                                    >
                                        <div className="image">
                                            <img src="/images/about-img2.jpg" alt="about" />
                                        </div> 
                                    </ScrollAnimation>
                                </div>

                                <div className="col-6 col-lg-6 col-md-6">
                                    <ScrollAnimation 
                                        animateIn='fadeInLeft'
                                        initiallyVisible={true}
                                        animateOnce={true}
                                    >
                                        <div className="image mt-30">
                                            <img src="/images/about-img3.jpg" alt="about" />
                                        </div>
                                    </ScrollAnimation>
                                </div>

                                <div className="col-6 col-lg-6 col-md-6">
                                    <ScrollAnimation 
                                        animateIn='fadeInLeft'
                                        initiallyVisible={true}
                                        animateOnce={true}
                                    >
                                        <div className="image mt-30">
                                            <img src="/images/about-img4.jpg" alt="about" />
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <span>About Ziran</span>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <h2>We Are Digital <b>Marketing</b> & Branding</h2>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <p>We are an experienced and talented team of passionate consultants who live and breathe search engine marketing</p>
                                </ScrollAnimation>
 
                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <ul>
                                        <li>Creative Design</li>
                                        <li>Modern Design</li>
                                        <li>Retina Ready</li>
                                        <li>Awesome Design</li>
                                        <li>Responsive Design</li>
                                    </ul>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                    animateIn='fadeInRight'
                                    initiallyVisible={true}
                                    animateOnce={true}
                                >
                                    <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation, and communications requirements. We work with you, not for you. Although we have great resources.</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsTwo;