import React from 'react'

import "./ThirdView.css"
const ThirdView = () => {
    return (
        <div className='bgImage3'>

            <div className='mainDiv'>

                <div className='innerDiv'>

                    {/* div for flex Direction-row */}
                    <div className='firstRow'>

                        {/* 1 */}
                        <div className='iconBox'>
                            <img className='iconImage' src="https://cdn-icons-png.flaticon.com/512/3157/3157356.png" alt="" />
                            <h5>TOP ICE-CREAM</h5>
                        </div>

                        {/* 2 */}
                        <div className='iconBox'>
                            <img className='iconImage' src="https://as2.ftcdn.net/v2/jpg/05/74/00/37/1000_F_574003746_ZLNwrVZ4EfksB6an0lCYINuxXjuqYazg.jpg" alt="" />
                            <h5>FRUITE SORBETS</h5>
                        </div>

                        {/* 3 */}
                        <div className='iconBox'>
                            <img className='iconImage' src="https://as1.ftcdn.net/v2/jpg/03/97/35/58/1000_F_397355860_yQ1MKuXx9Q3TRdA1yhjHhPLWsXd5J4r7.jpg" alt="" />
                            <h5>CHIP FLAVOURS</h5>
                        </div>
                    </div>

                    {/* div for flex Direction-row */}
                    <div className='firstRow'>

                        {/* 1 */}
                        <div className='iconBox'>
                            <img className='iconImage' src="https://cdn-icons-png.flaticon.com/512/5821/5821432.png" alt="" />
                            <h5>SMOOTHIES</h5>
                        </div>

                        {/* 2 */}
                        <div className='iconBox'>
                            <img className='iconImage' src="https://cdn-icons-png.flaticon.com/512/2719/2719435.png" alt="" />
                            <h5>TOP ICE-CREAM</h5>
                        </div>

                        {/* 3 */}
                        <div className='iconBox'>
                            <img className='iconImage' src="https://cdn-icons-png.flaticon.com/512/2738/2738730.png" alt="" />
                            <h5>DRINKS & MORE</h5>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ThirdView
