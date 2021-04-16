import React from 'react'
import { Card } from '../../../styled/Card'
import { Button } from '../../../styled/Button'

function index ({ title, content, buttontext }) {
  return (
    <Card id="getearly">
      <div className='section-area'>
        <div className='section-details'>
          <h3>{title}</h3>
          <p>{content}</p>
          {/* <button className="general-btn">See how it works</button> */}
          <Button>{buttontext}</Button>
        </div>
      </div>
    </Card>
  )
}
export default index
