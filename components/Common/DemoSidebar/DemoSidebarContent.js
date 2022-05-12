import React, { Component } from 'react';
import Link from 'next/link';

class DemoSidebarContent extends Component {

    state = {
        modal: false
    };

    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <>
                <div className={`example-demo-modal ${this.props.active}`}>
                    <div className="inner">
                        <ul>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home1.jpg" alt="image" />
                                    <span>Home 1</span>
                                    <Link href="/">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home2.jpg" alt="image" />
                                    <span>Home 2</span>
                                    <Link href="/index2">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home3.jpg" alt="image" />
                                    <span>Home 3</span>
                                    <Link href="/index3">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home4.jpg" alt="image" />
                                    <span>Home 4</span>
                                    <Link href="/index4">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home5.jpg" alt="image" />
                                    <span>Home 5</span>
                                    <Link href="/index5">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home6.jpg" alt="image" />
                                    <span>Home 6</span>
                                    <Link href="/index6">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home7.jpg" alt="image" />
                                    <span>Home 7</span>
                                    <Link href="/index7">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home8.jpg" alt="image" />
                                    <span>Home 8</span>
                                    <Link href="/index8">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home9.jpg" alt="image" />
                                    <span>Home 9</span>
                                    <Link href="/index9">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home10.jpg" alt="image" />
                                    <span>Home 10</span>
                                    <Link href="/index10">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home11.jpg" alt="image" />
                                    <span>Home 11</span>
                                    <Link href="/index11">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home12.jpg" alt="image" />
                                    <span>Home 12</span>
                                    <Link href="/index12">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home13.jpg" alt="image" />
                                    <span>Home 13</span>
                                    <Link href="/index13">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home14.jpg" alt="image" />
                                    <span>Home 14</span>
                                    <Link href="/index14">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home15.jpg" alt="image" />
                                    <span>Home 15</span>
                                    <Link href="/index15">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home16.jpg" alt="image" />
                                    <span>Home 16</span>
                                    <Link href="/index16">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home17.jpg" alt="image" />
                                    <span>Home 17</span>
                                    <Link href="/index17">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home18.jpg" alt="image" />
                                    <span>Home 18</span>
                                    <Link href="/index18">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home19.jpg" alt="image" />
                                    <span>Home 19</span>
                                    <Link href="/index19">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="single-demo">
                                    <img src="/images/demo/home20.jpg" alt="image" />
                                    <span>Home 20</span>
                                    <Link href="/index20">
                                        <a className="link-btn" target="_blank"></a>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="header-title">
                        <button className="example-demo-modal-control" onClick={this.closeModal} >
                            <i className="icofont-close"></i>
                        </button>
                        <div className="title">View Demo</div>
                    </div>
                </div>
            </>
        );
    }
}

export default DemoSidebarContent;