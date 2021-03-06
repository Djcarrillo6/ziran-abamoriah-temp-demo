import React, { Component } from 'react';
import Link from 'next/link';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import dynamic from 'next/dynamic';
import VisibilitySensor from "react-visibility-sensor";
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
}

class MainBannerTwo extends Component {
    // Video modal
    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    // Home slides
    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <>
                {this.state.display ? <OwlCarousel 
                id="home" className="home-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="main-banner item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content text-center">
                                                <span
                                                    className={
                                                        isVisible ? "sub-title animated zoomIn opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    We Are Creative
                                                </span>

                                                <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    The Best <b>Digital</b> Experience
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInDown opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                
                                                <div
                                                    className={
                                                        isVisible ? "animated fadeInDown opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    <div className="btn-box">
                                                        <Link href="#contact">
                                                            <a className="btn btn-primary">
                                                                Get Started
                                                            </a>
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
                                        )}
                                    </VisibilitySensor>             
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

                    <div className="main-banner item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content text-center">
                                                <span
                                                    className={
                                                        isVisible ? "sub-title animated zoomIn opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    We Are Expert
                                                </span>

                                                <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    The Best <b>Digital</b> Experience
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInDown opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                
                                                <div
                                                    className={
                                                        isVisible ? "animated fadeInDown opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    <div className="btn-box">
                                                        <Link href="#contact">
                                                            <a className="btn btn-primary">
                                                                Get Started
                                                            </a>
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
                                        )}
                                    </VisibilitySensor>             
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

                    <div className="main-banner item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content text-center">
                                                <span
                                                    className={
                                                        isVisible ? "sub-title animated zoomIn opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    We Are Award Winner
                                                </span>

                                                <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    The Best <b>Digital</b> Experience
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInDown opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                
                                                <div
                                                    className={
                                                        isVisible ? "animated fadeInDown opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    <div className="btn-box">
                                                        <Link href="#contact">
                                                            <a className="btn btn-primary">
                                                                Get Started
                                                            </a>
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
                                        )}
                                    </VisibilitySensor>             
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
                </OwlCarousel> : ''}
 
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

export default MainBannerTwo;