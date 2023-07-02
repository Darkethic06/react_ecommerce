import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="footer logo" srcset="" />
                <h2 className='mb-0 text-white'>Sign Up for NewsLetter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <address className='text-white fs-6'>
                277 Near Vill Chopal, <br /> Sonipat, Haryana <br />
                PinCode: 131103
              </address>
              <a href="tel:+91 9123739183" className='mt-2 d-block mb-2 text-white'>+91 9123739183</a>
              <a href="mailto:arijitpaul062@gmail.com" className='mt-2 d-block mb-2 text-white'>arijitpaul062@gmail.com</a>
              <div className='social_icons d-flex gap-15'>
                <a href="">
                  <BsLinkedin className='text-white fs-6 mb-0'/>
                </a>
                <a href="">
                  <BsGithub className='text-white fs-6 mb-0'/>
                </a>
                <a href="">
                  <BsInstagram className='text-white fs-6 mb-0'/>                  
                </a>
                <a href="">
                  <BsYoutube className='text-white fs-6 mb-0'/>                  
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                <Link className='text-white py-2 mb-1'>Career</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center text-white mb-0'>
                &copy; {new Date().getFullYear()} Developed by <Link to="https://github.com/Darkethic06" className='text-white'>Arijit Paul</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer