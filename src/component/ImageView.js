import React from 'react'
import "./ImageView.css"

const ImageView = () => { 
  return (
    <div className='imageMainDiv'>
      
      <div className='imageInnerDiv'>
        <div>
            <img className='ImageViewImg' src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/1ff2aeea349252358655287a/pexels-photo-5702789.jpeg" alt="" />
        </div>
        <div>
            <img className='ImageViewImg' src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/309313e87c465085b3fc5de0/pexels-photo-5702791.jpeg" alt="" />
        </div>
        <div>
            <img className='ImageViewImg' src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/5a6d8ff594ce5062a48c8336/pexels-photo-5702782.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ImageView
