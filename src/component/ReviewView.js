import React from 'react'
import "./ReviewView.css"

const ReviewView = () => {
  return (
    <div className='reviewMainDiv'>

        <div className='reviewInnerDiv'>
            <div className='reviewLeftDiv'>
                <img className='reviewImage' src="https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className='reviewRightDiv'>
                <h3 className='reviewH3'>BAKERY</h3>
                <h2 className='reviewH2'>REVIEWS</h2>
                <span className='comma'>“</span> <br />
                <span className='reviewSpan'>We bring the season’s best mix of organic produce and hand-crafted farm products conveniently to your door by growing and partnering with local farms and artisans in your area.</span>
            </div>
        </div>
      
    </div>
  )
}

export default ReviewView
