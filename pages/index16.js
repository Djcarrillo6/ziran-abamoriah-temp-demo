import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBannerSixteen from '../components/PageBanners/MainBannerSixteen';
import OurFeatures from '../components/Common/OurFeatures';
import AboutUs from '../components/Common/AboutUs';
import CtaArea from '../components/Common/CtaArea';
import OurServices from '../components/Common/OurServices';
import WhoWeAre from '../components/Common/WhoWeAre';
import SkillsArea from '../components/Common/SkillsArea';
import WhyWeDifferent from '../components/Common/WhyWeDifferent';
import OurPortfolio from '../components/Common/OurPortfolio';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Team from '../components/Common/Team';
import OurStory from '../components/Common/OurStory';
import Pricing from '../components/Common/Pricing';
import OurTestimonials from '../components/Common/OurTestimonials';
import WeAreBestCompany from '../components/Common/WeAreBestCompany';
import Faq from '../components/Common/Faq';
import BlogSlider from '../components/Common/BlogSlider';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Partner from '../components/Common/Partner';
import Subscribe from '../components/Common/Subscribe';
import ContactForm from '../components/Common/ContactForm';
import Footer from '../components/Layouts/Footer';

class Index16 extends Component {
    render() {
        return (
            <>
                <Navbar /> 
                <MainBannerSixteen />
                <OurFeatures />
                <AboutUs />
                <CtaArea />
                <OurServices />
                <WhoWeAre /> 
                <SkillsArea />
                <WhyWeDifferent />
                <OurPortfolio />
                <FunFactsTwo /> 
                <Team /> 
                <OurStory /> 
                <Pricing /> 
                <OurTestimonials />
                <WeAreBestCompany />
                <Faq /> 
                <BlogSlider /> 
                <CtaAreaTwo /> 
                <Partner /> 
                <Subscribe />
                <ContactForm />
                <Footer />
            </>
        );
    }
}

export default Index16;