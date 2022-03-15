import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HeroSection.css'
function HeroSection() {
AOS.init();
  return (
<div className='hero-container'>
    <h3>Redgd.NO. 19541</h3>
        <h1 data-aos='fade-up' data-aos-duration='1000'>WELOME TO</h1>
            <p data-aos='fade-up' data-aos-duration='2000'>SHREE DURGA DENTAL CLINIC</p>
   
    <div className='hero-btns'>
        <button style={{ backgroundColor:'red'}} data-aos='fade-up' data-aos-duration='2000' data-aos-once='true' ><a to="/Products" style={{textDecoration:"none", color:'white'}}>OUR SERVICES</a></button>
        <button data-aos='fade-up' data-aos-duration='2000' data-aos-once='true'>CONTACT US</button>
</div>
    </div>
 )
}

export default HeroSection