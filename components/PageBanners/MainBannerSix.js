import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#fff'
        },
        size: {
            value: 3
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
}

class MainBannerSix extends Component {
    
    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div id="home" className="main-banner item-bg5">
                    <div id="particles-js">
                        <Particles 
                            params={{...particleOpt}}
                        />
                    </div> 
                    
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content text-center">
                                    <span>We Are Creative</span>
                                    <h1>The Best <b>Digital</b> Experience</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <div className="btn-box">
                                        <Link href="#contact">
                                            <a className="btn btn-primary">Get Started</a>
                                        </Link>
                                        
                                        <span>or</span>

                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn popup-youtube"
                                        > 
                                            <i className="icofont-ui-play"></i> Watch Video
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="shape1">
                        <img src="/images/shapes/shape1.png" alt="shape1" />
                    </div>
                    <div className="shape2 rotateme">
                        <img src="/images/shapes/shape2.png" alt="shape2" />
                    </div>
                    <div className="shape3 rotateme">
                        <img src="/images/shapes/shape3.png" alt="shape3" />
                    </div>
                    <div className="shape4">
                        <img src="/images/shapes/shape4.png" alt="shape4" />
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default MainBannerSix;