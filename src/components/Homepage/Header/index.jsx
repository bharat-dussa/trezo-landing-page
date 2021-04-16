import React from 'react'
import { Banner, Navbar } from '../../../styled/Header'
import { Button } from '../../../styled/Button'

function index ({buttontext}) {
  return (
    <Banner className={'banner-image'}>
      <Navbar>
        <nav>
          <div id='logo'>
            <a href="/">
              {' '}
              <img src={`assests/logo/trezo-logo.svg`} alt='trezo logo' />
            </a>
          </div>
          {/* <a href="#down"><Button className={'desktop-btn'}>{buttontext}</Button></a> */}
          <Button className={'desktop-btn'}>{buttontext}</Button>
        </nav>
      </Navbar>
      <div className={'banner-details'}>
        <h2>REAL ESTATE INVESTMENTS MADE ACCESSIBLE</h2>
        <p>
          Trezo enables you to buy loan-free fractions of income-generating
          properties with friends and like-minded co-owners
        </p>
        <button className='banner-btn'>
          <img src='assests/components/down-arrow.svg' alt='down arrow' />
         
        </button>
        <Button className={'mobile-btn'}>{buttontext}</Button>
      </div>
    </Banner>
  )
}

// const Bannerdetails = styled.div``;
export default index
