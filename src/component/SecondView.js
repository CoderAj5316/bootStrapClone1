import React from 'react'
import "./SecondView.css"

const SecondView = () => {
    return (
        <div >

            <div className="bgImage2">

                {/* 1 */}
                <div className>
                    <h6 style={{marginTop:'90px'}}>OUR MENU</h6>
                    <h2 style={{marginBottom:'50px'}}>Delicious From The Chef</h2>
                </div>

                {/* 2 */}
                <div className='menuList'>
                    <div className='divLeft'>
                        <h6>PEAR SALAD / $11</h6>
                        <h4>Reid’s Orchard Pears / Bitter Greens / Granola / Big Firefly / Farms Black and Blue / Pine Nut Vinaigrette</h4>
                    </div>
                    <div className='divRight'>
                        <h6>BRODETTO DI PESCE / $9</h6>
                        <h4>Adriatic Seafood Soup / Clams / Prawns / Livornese / Langoustine Scallop / Celery / Olive</h4>
                    </div>
                </div>

                {/* 3 */}
                <div className='menuList'>
                    <div   className='divLeft'>
                        <h6>FARM GREENS / $9</h6>
                        <h4>Honey Vinaigrette / House Cheese Crouton / Fine Herbs</h4>
                    </div>
                    <div className='divRight'>
                        <h6>GRILLED KALE / $9</h6>
                        <h4>Bitter Greens / House Cheese Crouton / Kamon Iberico</h4>
                    </div>
                </div>

                {/* 4 */}
                <div  style={{marginBottom:'70px'}} className='menuList'>
                    <div  className='divLeft'>
                        <h6>RICOTTA GNUD / $18</h6>
                        <h4>Marinated Sardine / Red Currant / Chanterelles / Pine Nuts / Mantecato Vitello / Fennel / Olive / Pepitas</h4>
                    </div>
                    <div  className='divRight'>
                        <h6>CANESTRELLI / $18</h6>
                        <h4>Reid Orchatd Pears / Bitter Greens / House Cheese Crouton / Marinated Sardine / Chanterelles / Clams</h4>
                    </div>
                </div>

            
            </div>

        </div>
    )
}

export default SecondView
