import React from 'react'
import "./HealthAware.css"

const HealthAware = () => {
  return (
    <div className='healthAwareMainDiv'>

        <div className='healthAwareInnerDiv'>
            <div className='healthAwareLeftDiv'> 
                    <h2 className='healthH2'>Health is the most precious</h2>
                    <span className='healthParagraph'>While it is important to have naturally occurring sugars in your diet, many foods contain harmful added sugars that contain no nutritional value.
                    <br /> <br/> According to a study conducted by the University of Florida, the brain releases heroin-like chemicals called endogenous opioids when an individual indulges on sweet, salty or fatty foods.  </span>
                    <span  className='readMore'>READ MORE</span>
                </div>
                <div className="healthAwareRightDiv">
                    <img className='mixFruits' src="https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35567.jpg?w=900" alt="" />
                </div>
        </div>
      
           
      
      
    </div>
  )
}

export default HealthAware
